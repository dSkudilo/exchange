export function filterArrItemByQuantity (arr) {
  if (arr?.length > 0) {
    return arr.filter(e => {
      if (e.length !== 2) return false
      return !!(+e[1])
    })
  }
  return []
}
