/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

示例: 

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
进阶:

如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0, right = 0, result = Infinity, temp = 0
  while (right < nums.length) {
      if (nums[right] + temp >= s) {
          result = Math.min(result, right - left + 1)
          temp -= nums[left++]
      } else {
          temp += nums[right++]
      }
  }
  return result === Infinity ? 0 : result
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let min = 0, max = nums.length, len = nums.length, result = -1
    const getSumMax = n => {
        let sum = 0, result = 0
        for (let i = 0; i < n; i++) sum += nums[i]
        result = sum
        for (let i = n; i < len; i++) {
            sum += nums[i]
            sum -= nums[i - n]
            result = Math.max(result, sum)
        }
        return result
    }
    while (min <= max) {
        let mid = (min + max) >>> 1
        if (getSumMax(mid) >= s) {
            max = mid - 1
            result = mid
        } else {
            min = mid + 1
        }
    }
    return result === -1 ? 0 : result
}; 