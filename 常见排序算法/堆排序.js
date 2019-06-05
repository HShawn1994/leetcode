function heapSort (arr) {
  const sink = (arr, lo, hi) => {
    while (2 * lo <= hi) {
      let j = 2 * hi
      if (j < hi && arr[j] < arr[j + 1]) j++
      if (arr[lo] >= arr[j]) break
      [arr[j], arr[lo]] = [arr[lo], arr[j]]
      lo = j
    }
  }
  let n = arr.length
  for (let i = ~~(n / 2); i >= 1; i--) {
    sink(arr, i, n)
  }
  while (n > 1) {
    [arr[1], arr[n]] = [arr[n--], arr[1]]
    sink(arr, 1, n)
  }
}

function heapSort (arr) {
  let len = arr.length
  const heapify = (arr, i, len) => {
    for (let k = 2 * i + 1; k < len; k = 2 * k + 1) {
      if (k + 1 < len && arr[k + 1] > arr[k]) k++
      if (arr[k] > arr[i]) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
        i = k
      } else {
        break
      }
    }
  }
  const buildHeap = arr => {
    for (let i = ~~(len / 2) - 1; i >= 0; i--) {
      heapify(arr, i, len)
    }
  }
  buildHeap(arr)
  for (let i = len - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]]
    len--
    heapify(arr, 0, len)
  }
  return arr
}