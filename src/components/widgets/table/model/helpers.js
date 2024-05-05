function getObjectItem (item, field) {
  const condition = item && typeof item === 'object' && !Array.isArray(item) && field && typeof field === 'string'
  if (condition) {
    return item[field]
      ? item[field]
      : '-'
  }
  return '-'
}

function getArrayItem (item, id) {
  const condition = item && Array.isArray(item) && typeof id === 'number'
  if (condition) {
    return item[id]
      ? item[id]
      : '-'
  }
  return '-'
}

export function getItem (item, field, id) {
  return Array.isArray(item)
    ? getArrayItem(item, id)
    : getObjectItem(item, field)
}
