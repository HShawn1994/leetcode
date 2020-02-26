/*
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
      while(nums[i] !== i + 1) {
          const idx = nums[i] - 1
          if (nums[i] <= 0 || nums[i] > len || (nums[i] === nums[idx])) break
          [nums[i], nums[idx]] = [nums[idx], nums[i]]
      }
  }
  for (let i = 0; i < len; i++) {
      if (nums[i] !== i + 1) return i + 1
  }
  return len + 1
};