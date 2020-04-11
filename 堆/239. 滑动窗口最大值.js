/*
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回滑动窗口中的最大值。
示例:
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
提示：
你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

进阶：
你能在线性时间复杂度内解决此题吗？
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 // 双端队列
var maxSlidingWindow = function(nums, k) {
  let result = [], i = 0, n = nums.length, deque = [], maxIdx = 0
  if (!nums.length || !k) return result
  if (k === 1) return nums
  const clean = (i, k) => {
      if (deque.length && deque[0] === i - k) deque.shift()
      while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop()
  }
  while (i < k) {
      clean(i, k)
      deque.push(i)
      if (nums[i] > nums[maxIdx]) maxIdx = i
      i++
  }
  result[0] = nums[maxIdx]
  while (i < n) {
      clean(i, k)
      deque.push(i)
      result[i - k + 1] = nums[deque[0]]
      i++
  }
  return result
};