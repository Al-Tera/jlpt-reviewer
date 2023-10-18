import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import Kanjis from '../common/kanjiList'

interface ISingleKanji {
  key?: string
}

function SideLesson() {

  const { level, kanjiDefinition, handleKanjiClick } = useContext(AppContext)
  const [kanjis, setKanjis] = useState<Object[]>([])

  useEffect(() => {
    if (level) {
      const activeKanjis = Object.entries(Kanjis[`n${level}`]).map(([key, value]) => { return { key, value } })
      setKanjis(activeKanjis)
    }
  }, [level])

  const getMeanings = () => kanjiDefinition?.meanings

  const getReadings = (reading: string[] | null, text: string) =>
    reading && <p><strong>{text} readings:</strong> {reading.join(', ')}</p>

  return (
    <>
      <div className='kanji__list'>
        {kanjis?.length && kanjis.map((kanji: ISingleKanji, i: number) =>
          <p key={i} className={`${kanjiDefinition?.kanji === kanji ? 'kanji__active' : ''}`}
            onClick={() => handleKanjiClick(kanji.key || '')}>{kanji.key}
          </p>)}
      </div>
      <div className='lesson__description'>
        {
          kanjiDefinition ?
            <>
              <div><p className='kanji'>{kanjiDefinition.kanji}</p></div>
              <p><strong>meaning:</strong> {getMeanings()}</p>
              {getReadings(kanjiDefinition?.kun_readings, 'Kun')}
              {getReadings(kanjiDefinition?.on_readings, 'On')}
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