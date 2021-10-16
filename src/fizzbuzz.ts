export const fizzBuzzNumber = (num: number) => {
    if (num<1)      return new Error('Invalid number')
    if (num%3===0
       && num%5==0) return 'FizzBuzz'
    if (num%3===0)  return 'Fizz'
    if (num%5===0)  return 'Buzz'
    return num.toString()
}

export const fizzBuzzArray = (arrNum: Array<number>) => {
    return arrNum.map(num => fizzBuzzNumber(num))
}
