/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 贪心
var coinChange = function(coins, amount) {
  let result = Infinity
  coins.sort((a, b) => b - a)
  const helper = (idx, amount, count) => {
    if (amount === 0) {
      result = Math.min(result, count)
      return
    }
    if (idx === coins.length) return
    for (let i = Math.floor(amount / coins[idx]); i >= 0 && i + count < result; i--) {
      helper(idx + 1, amount - i * coins[idx], count + i)
    }
  }
  helper(0, amount, 0)
  return result === Infinity ? -1 : result
};

// dp
var coinChange = function(coins, amount) {
  let max = amount + 1, dp = Array(max).fill(max)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
};