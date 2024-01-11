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
