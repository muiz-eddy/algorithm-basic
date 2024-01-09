function findSmallest(arr: number[]): number {
  let smallest = arr[0]
  let smallestIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

export function selectionSort(arr: number[]): number[] {
  const sortedArr: number[] = []
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const index = findSmallest(arr)
    sortedArr.push(arr[index])
    arr.splice(index, 1)
  }
  return sortedArr
}
