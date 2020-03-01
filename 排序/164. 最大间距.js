/*
给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

示例 1:

输入: [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
示例 2:

输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
说明:

你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const len = nums.length
  if (len < 2) return 0
  let max = Math.max(...nums), exp = 1, result = 0
  while (max / exp > 0) {
    const count = Array(10).fill().map(_ => [])
    for (let i = 0; i < len; i++) count[~~(nums[i] / exp) % 10].push(nums[i])
    let idx = 0
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < count[i].length; j++) nums[idx++] = count[i][j]
    }
    exp *= 10
  }
  for (let i = 0; i < len - 1; i++) result = Math.max(result, nums[i + 1] - nums[i])
  return result
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const n = nums.length
  if (n < 2) return 0
  let max = Math.max(...nums), min = Math.min(...nums), result = 0, boxes = Math.ceil((max - min) / (n - 1))
  if (max === min) return 0
  const maxes = Array(n - 1).fill(-1), mins = Array(n - 1).fill(Infinity)
  nums.forEach(num => {
    const idx = ~~((num - min) / boxes)
    if (num !== max && num !== min) {
      maxes[idx] = Math.max(num, maxes[idx])
      mins[idx] = Math.min(num, mins[idx])
    }
  }); 
  let prev = min
  for (let i = 0; i < n - 1; i++) {
    if (maxes[i] == -1) continue
    result = Math.max(result, mins[i] - prev)
    prev = maxes[i]
  }
  result = Math.max(result, max - prev)
  return result
};