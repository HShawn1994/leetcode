/*
给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

示例 1:

输入: [3,2,3]
输出: [3]
示例 2:

输入: [1,1,1,3,3,2,2,2]
输出: [1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!nums.length) return []
  let result = [], c1 = c2 = 0, n = Math.floor((nums.length) / 3), n1 = n2 = nums[0]
  nums.forEach(num => {
      if (num === n1) c1++
      else if (num === n2) c2++
      else if (c1 === 0) {
          n1 = num
          c1 = 1
      } else if (c2 === 0) {
          n2 = num
          c2 = 1
      } else {
          c1--
          c2--
      }
  })
  c1 = c2 = 0
  nums.forEach(num => {
      if (num === n1) c1++
      if (num === n2) c2++
  })
  if (c1 > n) result.push(n1)
  if (c2 > n && n1 !== n2) result.push(n2)
  return result
};