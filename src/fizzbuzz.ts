export const fizzBuzzNumber = (num: number) => {
    if (num<1) return new Error('Invalid number')

    const strNum: string = num.toString()

    if (num%3===0
       && num%5==0) return 'FizzBuzz'

    if (strNum.includes('3')) return 'Fizz'
    if (strNum.includes('5')) return 'Buzz'

    if (num%3===0)  return 'Fizz'
    if (num%5===0)  return 'Buzz'
    return strNum
}

export const fizzBuzzArray = (arrNum: Array<number>) => {
    return arrNum.map(num => fizzBuzzNumber(num))
}
