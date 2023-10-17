const addParentheses = (str:string) =>  {
  return str.includes('.') ? `'${str.replace('.','(')})'` : `'${str}'`
}

const formattedReading = (value: any) => {
  return value.map((reading:any)=>addParentheses(reading)).join(', ')
}

export { formattedReading }