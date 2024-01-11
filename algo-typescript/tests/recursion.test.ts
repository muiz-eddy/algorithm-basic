import { sum } from '../src/recursion'

describe('sum function using recursion', () => {
  it('should sum all of the integer from 1 - n', () => {
    expect(sum(10)).toEqual(55)
  })
})
