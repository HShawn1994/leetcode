/*
给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// 暴力法
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j <= k; j++) {
          if (i + j > nums.length) break
          if (Math.abs(nums[i] - nums[j + i]) <= t) return true
      }
  }
  return false
};
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = Math.max(i - k, 0); j < i; j++) {
          if (Math.abs(nums[i] - nums[j]) <= t) return true
      }
  }
  return false
};

// 桶排序
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0) return false
  let map = {}, w = t + 1
  const getId = (num, w) => num >= 0 ? Math.floor(num / w) : Math.floor((num + 1) / w) - 1
  for (let i = 0; i < nums.length; i++) {
    if (i > k) delete map[getId(nums[i - k - 1], w)]
    const id = getId(nums[i], w)
    if (map[id] != null) return true
    if (map[id + 1] && map[id + 1] - nums[i] < w) return true
    if (map[id - 1] && nums[i] - map[id - 1] < w) return true
    map[id] = nums[i]
  }
  return false
};