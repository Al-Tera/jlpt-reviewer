import axios from 'axios';

const getTestList =  (i:string) => {
    const data = axios.get(`https://kanjiapi.dev/v1/kanji/grade-${Math.abs(parseInt(i)-6)}`)
    .then(res => res.data)
    .catch(err => err);
    return data
  }
const getKanjiDefinition = async (kanji:string) => {
    const data = await axios.get(`https://kanjiapi.dev/v1/kanji/${kanji}`)
    .then(res => res.data)
    .catch(err => err);
    return data
}

const addParentheses = (str:string) =>  {
  return str.includes('.') ? `${str.replace('.','(')})` : str
}

const formattedKunReading = (value: any) => {
  return value.kun_readings.map((reading:any)=>addParentheses(reading)).join(', ')
}

export { getTestList, getKanjiDefinition, formattedKunReading }