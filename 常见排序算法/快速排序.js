const partition = (arr, lo, hi) => {
  let i = lo, j = hi + 1
  let v = arr[lo]
  while (1) {
    while (arr[++i] < v) if (i == hi) break
    while (v < arr[--j]) if (j == lo) break
    if (i >= j) break
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  [arr[lo], arr[j]] = [arr[j], arr[lo]]
  return j
}
const sort = (arr, lo, hi) => {
  if (lo >= hi) return
  const j = partition(arr, lo, hi)
  sort(arr, lo, j - 1)
  sort(arr, j + 1, hi)
}
const quickSort = arr => {
  sort(arr, 0, arr.length - 1)
}