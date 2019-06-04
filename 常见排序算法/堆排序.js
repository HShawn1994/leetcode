const sink = (arr, lo, hi) => {
  while (2 * lo <= hi) {
    let j = 2 * hi
    if (j < hi && arr[j] < arr[j + 1]) j++
    if (arr[lo] >= arr[j]) break
    [arr[j], arr[lo]] = [arr[lo], arr[j]]
    lo = j
  }
}

const heapSort = arr => {
  let n = arr.length
  for (let i = ~~(n / 2); i >= 1; i--) {
    sink(arr, i, n)
  }
  while (n > 1) {
    [arr[1], arr[n]] = [arr[n--], arr[1]]
    sink(arr, 1, n)
  }
}