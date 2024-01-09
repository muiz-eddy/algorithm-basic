import { selectionSort } from '../src/sort'

const arr: number[] = [2, 1, 4, 6, 5]

describe('sort selections', () => {
  it('should sort the array', () => {
    expect(selectionSort(arr)).toEqual([1, 2, 4, 5, 6])
  })
})
