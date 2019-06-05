function quickSort (arr) {
  const partition = (arr, left, right) => {
    let temp = left, i = left, j = right
    while (i < j) {
      while (i < j && arr[j] >= arr[temp]) { j-- }
      while (i < j && arr[i] <= arr[temp]) { i++ }
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[temp], arr[j]] = [arr[j], arr[temp]]
    return temp
  }
  const helper = (arr, left, right) => {
    if (left > right) return
    const temp = partition(arr, left, right)
    helper(arr, 0, temp - 1)
    helper(arr, temp + 1, right)
  }
  helper(arr, 0, arr.length - 1)
}