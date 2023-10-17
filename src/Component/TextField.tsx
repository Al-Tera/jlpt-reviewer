import { Dispatch, SetStateAction } from 'react'
import { hiragana, hiraganaMap, minorHiraganaMap } from '../common/constant';

interface Props {
  inputValidator: string | null;
  setInputValidator: Dispatch<SetStateAction<string | null>>;
}

function TextField({ inputValidator, setInputValidator }: Props) {

  const handleInputChange = (e: any) => {
    setInputValidator(null)
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

      const toHiragana = regexOutput.map((out: string) => {
        return (
          (out.length === 4) ? `っ${out[2] === 'y' ? `${hiraganaMap[`${out[0]}i`]}${minorHiraganaMap[out.slice(2)]}` : hiraganaMap[`${out.slice(1)}`]}` :
            (out.length === 3 && out.match(doubleLetter)) ? `っ${hiraganaMap[`${out.slice(1)}`]}` :
              (out.length === 3 && out[1] === 'y') ? `${hiraganaMap[`${out[0]}i`]}${minorHiraganaMap[out.slice(1, 3)]}` :
                hiraganaMap[out] || out)
      })
      e.target.value = toHiragana.join('')
    }
  }

  return (
    <input name="input_romaji" autoFocus className={`${inputValidator==='blue' ? 'mild-wrong' : inputValidator==='red' && 'wrong'}`} placeholder='Your Response' type='text'
      onChange={(e) => handleInputChange(e)} />
  )
}

export default TextField
