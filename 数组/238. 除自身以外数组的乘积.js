/*
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左右乘积列表
var productExceptSelf = function(nums) {
  const left = [1], right = [], n = nums.length
  right[n - 1] = 1
  for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1] 
  }
  return nums.map((_, idx) => left[idx] * right[idx])
};

// 乘积列表优化
var productExceptSelf = function(nums) {
  let result = [1], n = nums.length, right = 1
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right
    right *= nums[i]
  }
  return result