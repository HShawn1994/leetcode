
/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let i = 0, len = nums.length, result = nums[0] + nums[1] + nums[2]
  while (i < len - 2) {
      let first = i + 1; last = len - 1
      while (first < last) {
          const temp = nums[i] + nums[first] + nums[last]
          if (Math.abs(temp - target) < Math.abs(result - target)) result = temp
          if (temp > target) last--
          else if (temp === target) return result
          else first++
      }
      while (nums[i] === nums[++i]) {}
  }
  return result
};