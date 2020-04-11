/*
有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

求所能获得硬币的最大数量。

说明:

你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
示例:

输入: [3,1,5,8]
输出: 167 
解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
     coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治递归
var maxCoins = function(nums) {
  let newNums = [1, ...nums, 1], n = newNums.length, map = {}
  const dfs = (left, right) => {
      if (left + 1 === right) return 0
      const key = `${left}+${right}`
      if (map[key] != null) return map[key]
      let result = 0
      for (let i = left + 1; i < right; i++) {
          result = Math.max(result, newNums[i] * newNums[left] * newNums[right] + dfs(left, i) + dfs(i, right))
      }
      return map[key] = result
  }
  return dfs(0, n - 1)
};

// 动态规划
var maxCoins = function(nums) {
  let newNums = [1, ...nums, 1], n = newNums.length, dp = Array(n).fill().map(_ => Array(n).fill(0))
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], newNums[k] * newNums[i] * newNums[j] + dp[i][k] + dp[k][j])
      }
    }
  }
  return dp[0][n - 1]
};