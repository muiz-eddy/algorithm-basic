export function linearSearch (num: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true
    }
  }
  return false
}

export function binarySearch (num: number, arr: number[]): boolean {
  let low = 0
  let hi = arr.length - 1
  while (low <= hi) {
    const midpoint = Math.floor((hi - low) / 2)
    if (num === arr[midpoint]) {
      return true
    } else if (num < arr[midpoint]) {
      hi = midpoint - 1
    } else if (num > arr[midpoint]) {
      low = midpoint + 1
    }
  }
  return false
}
