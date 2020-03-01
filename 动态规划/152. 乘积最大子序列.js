/*
给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = -Infinity, max = 1, min = 1
  nums.forEach(num => {
      if (num < 0) [max, min] = [min, max]
      max = Math.max(num, max * num)
      min = Math.min(num, num * min)
      result = Math.max(result, max)
  })
  return result
};