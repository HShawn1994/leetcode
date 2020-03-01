/*
给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

*/

var longestConsecutive = function(nums) {
  if (!nums.length) return 0
  const parent = {}, count = {}
  nums.forEach(num => {
    parent[num] = num
    count[num] = 1
  })
  const find = x => {
    while (x !== parent[x]) x = parent[x]
    return x
  }
  const join = (x, y) => {
    x = find(x), y = find(y)
    if (x === y) return count[x]
    parent[x] = y
    count[y] += count[x]
    return count[y]
  }
  let result = 1
  nums.forEach(num => {
      if (parent[num + 1] != null) result = Math.max(result, join(num, num + 1))
  })
  return result
}