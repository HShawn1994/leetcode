/*
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */

// 递归
const map = {}
var numSquares = function(n) {
    if (map[n]) return map[n]
    if (n === 0) return 0
    let result = Number.MAX_VALUE
    for (let i = 1; i * i <= n; i++) {
        result = Math.min(numSquares(n - i * i) + 1, result)
    }
    return map[n] = result
};

// 动规
var numSquares = function(n) {
  if (n === 0) return 0
  const dp = Array(n + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
};

// BFS
var numSquares = function(n) {
  if (n === 0) return 0
  let stack = [n], level = 0, dict = new Set()
  while (stack.length) {
      let cur = stack.splice(0, stack.length)
      level++
      while (cur.length > 0) {
          let temp = cur.shift()
          for (let i = 1; i * i <= temp; i++) {
              let next = temp - i * i
              if (next === 0) return level
              if (!dict.has(next)) {
                  stack.push(next)
                  dict.add(next)
              }
          }
      }
  }
  return -1
};