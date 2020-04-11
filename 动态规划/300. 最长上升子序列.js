/*
给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0
  let n = nums.length, dp = [1], result = 1
  for (let i = 1; i < n; i++) {
      let max = 0
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) max = Math.max(dp[j], max)
      }
      dp[i] = max + 1
      result = Math.max(result, dp[i])
  }
  return result
};
// 二分法
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0
  let tails = [0], result = 0
  nums.forEach(num => {
    let i = 0, j = result
    while (i < j) {
      let m = (i + j) >>> 1
      if (tails[m] < num) i = m + 1
      else j = m
    }
    tails[i] = num
    if (result === i) result++ 
  })
  return result
};