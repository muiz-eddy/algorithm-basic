// Recursion Exercise from https://tildesites.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html
//

export function sum(n: number): number {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return n + sum(n - 1)
  }
}

export function findmin(arr: number[], size: number): number {
  if (size <= 0) {
    return 0
  } else if (size === 1) {
    return arr[0]
  } else {
    return Math.min(arr[size - 1], findmin(arr, size - 1))
  }
}

export function findsum(arr: number[], size: number): number {
  let sum = arr[size - 1]
  if (size <= 0) {
    return 0
  } else if (size === 1) {
    return arr[0]
  } else {
    sum = sum + findsum(arr, size - 1)
    return sum
  }
}

export function ispalindrome(arr: string[], size: number): boolean {
  // base case
  // recursive case
}
