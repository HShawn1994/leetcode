const merge = (arr, left, mid, right) => {
  let j = mid + 1, i = left
  const aux = arr.slice()
  for (let k = left; k <= right; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > right) arr[k] = aux[i++]
    else if (arr[j] < arr[i]) arr[k] = aux[j++]
    else arr[k] = aux[i++]
  }
}

const mergeSort = arr => {
  const sort = (arr, i, j) => {
    if (i >= j) return
    const mid = i + Math.floor((i + j) / 2)
    sort(arr, i, mid)
    sort(arr, mid + 1, j)
    merge(arr, i, mid, j)
  }
  sort(arr, o, arr.length - 1)
}