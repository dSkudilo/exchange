export function getTotal(arr) {
  if (arr?.length === 2) {
    return arr[0] * arr[1]
  }
  return '-'
}
