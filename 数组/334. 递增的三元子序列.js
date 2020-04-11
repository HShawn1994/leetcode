/*
给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

示例 1:

输入: [1,2,3,4,5]
输出: true
示例 2:

输入: [5,4,3,2,1]
输出: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false
  let n = nums.length, dp = Array(n).fill(1)
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) dp[i] = Math.max(dp[j] + 1, dp[i])
      }
      if (dp[i] >= 3) return true
  }
  return false
};
// 双指针
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false
  let n1 = n2 = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (n1 >= nums[i]) n1 = nums[i]
    else if (n2 >= nums[i]) n2 = nums[i]
    else return true
  }
  return false
};