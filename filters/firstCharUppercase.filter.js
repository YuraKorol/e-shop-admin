export default (value) => {
  if (!value) {
    return
  }
  return value.slice(0, 1).toUpperCase() + value.slice(1)
}