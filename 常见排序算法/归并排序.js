function mergeSort (arr) {
  const sort = (arr, left, right) => {
    if (left >= right) return
    const mid = ~~(left + (right - left) / 2)
    sort(arr, left, mid)
    sort(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }
  const merge = (arr, left, mid, right) => {
    let aux = arr.slice(), j = mid + 1, i = left
    for (let k = left; k <= right; k++) {
      if (i > mid) arr[k] = aux[j++]
      else if (j > right) arr[k] = aux[i++]
      else if (arr[j] < arr[i]) arr[k] = aux[j++]
      else arr[k] = aux[i++]
    }
  }
  sort(arr, 0, arr.length - 1)
}