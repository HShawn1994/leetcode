/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [], len = nums.length, i = 0
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[len - 1] < 0) return []
  while (i < len - 2) {
      if (nums[i] > 0) break
      let first = i + 1, last = len - 1
      while (first < last) {
          if (nums[i] * nums[last] > 0) break
          let temp = nums[i] + nums[first] + nums[last]
          if (temp === 0) {
              res.push([nums[i], nums[first], nums[last]])
          }
          if (temp <= 0) {
              while (first < last && nums[first] === nums[++first]) {}
          } else {
              while (first < last && nums[last] === nums[--last]) {}
          }
      }
      while (nums[i] === nums[++i]) {}
  }
  return res
};
