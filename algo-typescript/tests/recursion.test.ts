import { sum, findmin, findsum, ispalindrome } from '../src/recursion'

describe('sum function using recursion', () => {
  it('should sum all of the integer from 1 - n', () => {
    expect(sum(10)).toEqual(55)
  })
})

const arr: number[] = [4, 8, 3, 4, 5, 6, 2]

describe('find minimum function using recursion', () => {
  it('should find minimum element in an array', () => {
    expect(findmin(arr, arr.length)).toEqual(2)
  })
})

describe('find minimum function using recursion', () => {
  it('should return the first element if array size = 1', () => {
    expect(findmin([2], 1)).toEqual(2)
  })
})

describe('find sum function of an array using recursion', () => {
  it('should return the sum of the elements in an array', () => {
    expect(findsum(arr, arr.length)).toEqual(32)
  })
})

describe('check the function is a palindrome or not using recursion', () => {
  it('should return true or false', () => {
    expect(ispalindrome(['M', 'O', 'M'], 3)).toEqual(true)
  })
})
