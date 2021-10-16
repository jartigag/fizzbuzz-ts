import { fizzBuzzNumber } from '../src/fizzbuzz'

describe('FizzBuzz', () => {
    it('returns number if number not divisible neither by 3 nor 5', () => {
        expect(fizzBuzzNumber(1)).toEqual(1)
    })
    it('returns Fizz if number is 3', () => {
        expect(fizzBuzzNumber(3)).toEqual('Fizz')
    })
    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzzNumber(6)).toEqual('Fizz')
    })
    it('returns Buzz if number is 5', () => {
        expect(fizzBuzzNumber(5)).toEqual('Buzz')
    })
    it('returns Buzz if number is divisible by 5', () => {
        expect(fizzBuzzNumber(5)).toEqual('Buzz')
    })
})
