/*

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  const result = []
  let i = 0, len = nums.length
  for (let i = 0; i < len - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue
      const min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]
      if (min > target) break
      const max = nums[len - 1] + nums[len - 2] + nums[len - 3] + nums[i]
      if (max < target) continue
      let j = i + 1
      for (let j = i + 1; j < len - 2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue
          let first = j + 1, last = len - 1
          const min = nums[i] + nums[first] + nums[first + 1] + nums[j]
          if (min > target) break
          const max = nums[last] + nums[last - 1] + nums[i] + nums[j]
          if (max < target) continue
          while (first < last) {
              const sum = nums[i] + nums[j] + nums[first] + nums[last]
              if (sum === target) {
               result.push([nums[i], nums[j], nums[first], nums[last]])
              }
              if (sum <= target) {
                  while(first < last && nums[first] === nums[++first]) {}
              } else if (sum > target) {
                  while(first < last && nums[last] === nums[--last]) {}
              }
          }
      }
  }
  return result
};