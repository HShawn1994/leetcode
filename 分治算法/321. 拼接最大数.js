/*
给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。
说明: 请尽可能地优化你算法的时间和空间复杂度。

示例 1:

输入:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
输出:
[9, 8, 6, 5, 3]
示例 2:

输入:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
输出:
[6, 7, 6, 0, 4]
示例 3:

输入:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
输出:
[9, 8, 9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let result = Array(k).fill(0), m = nums1.length, n = nums2.length
  const merge = (nums1, nums2) => {
    let l1 = l2 = 0, result = []
    while (l1 < nums1.length || l2 < nums2.length) {
      const a = l1 < nums1.length ? nums1[l1] : -Infinity
      const b = l2 < nums2.length ? nums2[l2] : -Infinity
      if (a > b) result.push(nums1[l1++])
      else if (a < b) result.push(nums2[l2++])
      else {
        let s = l1, t = l2, hasDo = false
        while (s < nums1.length || t < nums2.length) {
            const a = s < nums1.length ? nums1[s] : -Infinity
            const b = t < nums2.length ? nums2[t] : -Infinity
            if (a > b) {
                result.push(nums1[l1++])
                hasDo = true
                break
            } else if (a < b) {
                result.push(nums2[l2++])
                hasDo = true
                break
            }
            s++
            t++
        }
        // 最后保底pushl2还是l1无所谓
        if (!hasDo) result.push(nums2[l2++])
      }
    }
    return result
  }
  const maxSeq = (nums, k) => {
    const result = [], n = nums.length
    if (k >= n) return nums
    let count = n - k
    for (let i = 0; i < n; i++) {
      while (result.length && nums[i] > result[result.length - 1] && count-- > 0) result.pop()
      result.push(nums[i])
    }
    return result.slice(0, k)
  }
  for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
    let temp = merge(maxSeq(nums1, i), maxSeq(nums2, k - i))
    if (temp.join('') > result.join('')) result = temp
  }
  return result
};