/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  let m = nums1.length, n = nums2.length, min = 0, max = m, half = parseInt((m + n + 1) / 2);
  while (min <= max) {
      let i = parseInt((min + max) / 2), j = half - i;
      if (i < max && nums2[j - 1] > nums1[i]) {
          min = i + 1
      } else if (i > min && nums1[i - 1] > nums2[j]) {
          max = i - 1
      } else {
          let leftMax = 0
          if (i === 0) leftMax = nums2[j - 1]
          else if (j === 0) leftMax = nums1[i - 1]
          else leftMax = Math.max(nums1[i - 1], nums2[j - 1])
          if ((m + n) % 2 === 1) return leftMax
          let rightMin = 0
          if (i === m) rightMin = nums2[j]
          else if (j === n) rightMin = nums1[i]
          else rightMin = Math.min(nums1[i], nums2[j])
          return (leftMax + rightMin) / 2
      }
  }
};