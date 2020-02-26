/*

给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  candidates.sort((a, b) => a - b)
  const dfs = (start, arr, target) => {
      if (target === 0) {
          result.push(arr.slice())
          return
      }
      for (let i = start; (i < candidates.length && candidates[i] <= target); i++) {
          if (i > start && (candidates[i] === candidates[i - 1])) continue
          arr.push(candidates[i])
          dfs(i + 1, arr, target - candidates[i])
          arr.pop()
      }
  }
  dfs(0, [], target)
  return result
};