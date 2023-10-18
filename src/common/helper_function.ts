const addParentheses = (str:string) =>  {
  return str.includes('.') ? `'${str.replace('.','(')})'` : `'${str}'`
}

const formattedReading = (value: string[]) => {
  return value.map((reading:string)=>addParentheses(reading)).join(', ')
}

export { formattedReading, addParentheses }