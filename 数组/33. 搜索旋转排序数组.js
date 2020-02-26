/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const findRotated = nums => {
      let i = 0; j = nums.length - 1
      if (nums[i] < nums[j]) return 0
      while (i <= j) {
          let mid = ~~((i + j) / 2)
          if (nums[mid] > nums[mid + 1]) return mid + 1
          else {
              if (nums[mid] < nums[i]) j = mid - 1
              else i = mid + 1
          }
      } 
      return 0
  }
  if (!nums.length) return -1
  if (nums.length === 1) return nums[0] === target ? 0 : -1
  const rotatedIndex = findRotated(nums)
  const binarySearch = (i, j, target) => {
      let left = i; right = j
      while (left <= right) {
          let mid = ~~((left + right) / 2)
          if (nums[mid] === target) return mid
          else if (target < nums[mid]) right = mid - 1
          else left = mid + 1
      }
      return -1
  }
  if (nums[rotatedIndex] === target) return rotatedIndex
  if (rotatedIndex === 0) return binarySearch(0, nums.length - 1, target)
  if (target >= nums[0]) return binarySearch(0, rotatedIndex, target)
  return binarySearch(rotatedIndex, nums.length - 1, target)
};
