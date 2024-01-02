import { linearSearch, binarySearch } from '../src/search'

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

describe('linear search functions', () => {
  it('should found the value', () => {
    expect(linearSearch(3, arr)).toEqual(true)
  })
})

describe('binary Search functions', () => {
  it('should found the value', () => {
    expect(binarySearch(3, arr)).toEqual(true)
  })
})
