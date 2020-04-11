/*
给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

示例 1:

输入: nums = [1, 5, 1, 1, 6, 4]
输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
示例 2:

输入: nums = [1, 3, 2, 2, 3, 1]
输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
说明:
你可以假设所有输入都会得到有效的结果。

进阶:
你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const swap = (nums, a, b) => [nums[a], nums[b]] = [nums[b], nums[a]]
  const quickSelect = (nums, left, right, mid) => {
    let i = j = left, t = nums[right - 1]
    while (j < right) {
      if (nums[j] <= t) swap(nums, i++, j++)
      else j++
    }
    if (i > mid + 1) quickSelect(nums, left, i - 1, mid)
    else if (mid >= i) quickSelect(nums, i, right, mid)
  }
  let len = nums.length, mid = len >> 1
  quickSelect(nums, 0, len, mid)
  let i = j = 0, k = len - 1
  while (j < k) {
    if (nums[j] > nums[mid]) swap(nums, j, k--)
    else if (nums[j] < nums[mid]) swap(nums, i++, j++)
    else j++
  }
  if (len & 1) mid++
  const temp1 = nums.slice(0, mid), temp2 = nums.slice(mid)
  for (let i = 0; i < temp1.length; i++) nums[2 * i] = temp1[temp1.length - i - 1]
  for (let i = 0; i < temp2.length; i++) nums[2 * i + 1] = temp2[temp2.length - i - 1]
};

var wiggleSort = function(nums) {
  const swap = (nums, a, b) => [nums[a], nums[b]] = [nums[b], nums[a]]
  const quickSelect = (nums, left, right, mid) => {
    let i = j = left, t = nums[right - 1]
    while (j < right) {
      if (nums[j] <= t) swap(nums, i++, j++)
      else j++
    }
    if (i > mid + 1) quickSelect(nums, left, i - 1, mid)
    else if (mid >= i) quickSelect(nums, i, right, mid)
  }
  let len = nums.length, mid = len >> 1
  const idx = i => (1 + 2 * i) % (len | 1)
  quickSelect(nums, 0, len, mid)
  let i = j = 0, k = len - 1
  while (j <= k) {
    if (nums[idx(j)] > nums[mid]) swap(nums, idx(j++), idx(i++))
    else if (nums[idx(j)] < nums[mid]) swap(nums, idx(j), idx(k--))
    else j++
  }
};