import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import Kanjis from '../common/kanjiList'

function SideLesson() {

  const { level, kanjiDefinition, handleClickKanji, isLoadingDefinition } = useContext(AppContext)
  const [kanjis, setKanjis] = useState<[] | null>(null)

  useEffect(() => {
    if (level) {
      const activeKanjis: any = Object.entries(Kanjis[`n${level}`]).map(([key, value]) => { return { key, value } })
      setKanjis(activeKanjis)
    }
  }, [level])

  const getMeanings = () => {
    return kanjiDefinition?.meanings
  }

  const getOnReadings = () => {
    if (kanjiDefinition?.on_readings)
    return  <p><strong>On readings:</strong> {kanjiDefinition.on_readings.join(', ')}</p>
  }
  const getKunReadings = () => {
    if (kanjiDefinition?.kun_readings)
    return  <p><strong>Kun readings:</strong> {kanjiDefinition.kun_readings.join(',  ')}</p>
  }


  return (
    <>
      <div className='kanji__list'>
        {kanjis?.length && kanjis.map((kanji: any, i: any) =>
          <p key={i} className={`${kanjiDefinition?.kanji === kanji ? 'kanji__active' : ''}`}
            onClick={() => handleClickKanji(kanji.key)}>{kanji.key}
          </p>)}
      </div>
      <div className='lesson__description'>
        {
          kanjiDefinition ?
            <>
              {
                isLoadingDefinition &&
                <span className='loader' />
              }
              <div>
                <p className='kanji'>{kanjiDefinition.kanji}</p>
              </div>
              <p><strong>meaning:</strong> {getMeanings()}</p>
              {getOnReadings()}
              {getKunReadings()}
            </>
            :
            <>
              <p>Nothing selected</p>
            </>
        }
      </div>
    </>
  )
}

export default SideLesson