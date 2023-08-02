import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { formattedKunReading } from '../common/helper_function'

function SideLesson() {

  const {kanjiList, kanjiDefinition, handleClickKanji, isLoadingDefinition } = useContext(AppContext)

  return (
    <>
      <div className='kanji__list'>
        { kanjiList.length && kanjiList.map((kanji:any,i:any)=><p key={i} style={{pointerEvents: kanjiDefinition?.kanji===kanji ? 'none': 'fill'}} onClick={()=>handleClickKanji(kanji)}>{kanji}</p>) }
      </div>
      <div className='lesson__description'>
      {
        kanjiDefinition ?
        <>
        {
          isLoadingDefinition &&
          <span className='loader'/>
        }
          <div>
            <p className='kanji'>{kanjiDefinition.kanji}</p>
            <p><strong>Meaning:</strong> {kanjiDefinition.meanings.join(', ')}</p>
          </div>
          <p><strong>On Reading:</strong>  {kanjiDefinition?.on_readings.join(', ')}</p>
          <p><strong>Kun Reading:</strong>	{formattedKunReading(kanjiDefinition)}</p>
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