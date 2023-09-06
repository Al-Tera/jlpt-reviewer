import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { hiragana, hiraganaMap, minorHiraganaMap } from '../common/helper';
import { AppContext } from '../AppContext';
import { formattedKunReading } from '../common/helper_function';

interface Props {
  handleSubmit: (e:any)=>void;
  inputValidator: boolean;
  setInputValidator: Dispatch<SetStateAction<boolean>>;
}

function TextField({handleSubmit, inputValidator, setInputValidator}: Props) {

  const {kanjiDefinition} = useContext(AppContext)
  const [upgradeInput, setUpgradeInput] = useState('')

  const handleInputChange = (e:any) => {
    setInputValidator(false)
    const value = e.target.value
    if (value) {
      const nonVowelPrecedeVowel = '[^aeiou][aeiou]'
      const doubleN = 'n{2}'
      const longString = '([^aeiou])\\1[hy][aeiou]'
      const middleHY = '[^aeiou][hy][aeiou]'
      const specialTS = '[t][s][aeiou]'
      const longSpecialTS = 't{2}[s][aeiou]'
      const SingleChara = '[^aeiou]|[aeiou]'
      const IgnoreSpecialChara = `[^a-zA-Z0-9]`
      const hiraganas = `[${hiragana.join('')}]`
      const doubleLetter = [...new Array(26)].map((_, i) => String.fromCharCode(97 + i).match(/[^aeioun]/gi))
        .filter(a => a !== null).map(a => `${a}{2}[aeiou]`).join('|')
      const regexPatternOmni = `${IgnoreSpecialChara}|${hiraganas}|${longString}|${longSpecialTS}|${doubleLetter}|${specialTS}|${doubleN}|${middleHY}|${nonVowelPrecedeVowel}|${SingleChara}`

      const regexPattern = new RegExp(`${regexPatternOmni}|${regexPatternOmni.toLocaleLowerCase()}`, "gi");
      const regexOutput = value.replaceAll('l', 'r').match(regexPattern);

      const toHiragana = regexOutput.map((out:string) => {
        return (
          (out.length === 4) ? `っ${out[2] === 'y' ? `${hiraganaMap[`${out[0]}i`]}${minorHiraganaMap[out.slice(2)]}` : hiraganaMap[`${out.slice(1)}`]}` :
            (out.length === 3 && out.match(doubleLetter)) ? `っ${hiraganaMap[`${out.slice(1)}`]}` :
              (out.length === 3 && out[1] === 'y') ? `${hiraganaMap[`${out[0]}i`]}${minorHiraganaMap[out.slice(1, 3)]}` :
                hiraganaMap[out] || out)
      })
      setUpgradeInput(toHiragana.join(''));
    }
    else setUpgradeInput(e.target.value)
  }
    
  const getFirstReading = (reading?:any[]) => {
    if(reading){
      const kanji = kanjiDefinition?.kanji
      const result = reading.map((item:string)=>
        item.includes('.') ? 
        `${kanji}(${item.slice(item.indexOf('.')+1)})`
        : kanji
      )
      return Array.from(new Set(result)).join(', ')
    }
  }

  return (
      <section className='container__user-input'>
        <form onSubmit={handleSubmit} autoComplete="off">
        <input autoFocus name="input_romaji" className={`${inputValidator && 'wrong'}`} placeholder='Your Response' type='text' value={upgradeInput}
          onChange={(e) => handleInputChange(e)} />
        </form>
        {/* <p className='text__modifier'>romanize: {upgradeInput}</p> */}
        {/* <p className='text__modifier'>hiragana: {finalOutput}</p> */}
          <button className='description__container'>
            <p className='title'>Description</p>
            <div className='description__content'>
              <div>

                {/* <p>Kun readings: {getFirstReading(kanjiDefinition.kun_readings)}</p> */}
                {
                  kanjiDefinition?.kun_readings.length ? 
                  <>
                    <p>Kanji: {getFirstReading(kanjiDefinition?.kun_readings)}</p>
                    <p>Kun reading: {formattedKunReading(kanjiDefinition)}</p>
                  </>:
                  <p>Kanji: {getFirstReading(kanjiDefinition?.on_readings)}</p>

                }
                <p>On reading: {kanjiDefinition?.on_readings.join(', ')}</p>
                <p>Definition: {kanjiDefinition?.meanings.join(', ')}</p>
              </div>
            </div>
          </button>
      </section>
  )
}

export default TextField
