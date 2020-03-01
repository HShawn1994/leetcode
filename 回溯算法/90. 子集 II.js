/*
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  const dfs = (idx, arr) => {
      result.push(arr.slice())
      for (let i = idx; i < nums.length; i++) {
          if (i > idx && nums[i] === nums[i - 1]) continue
          arr.push(nums[i])
          dfs(i + 1, arr)
          arr.pop()
      }
  }
  dfs(0, [])
  return result
};