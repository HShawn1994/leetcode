/*
给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。

示例:

输入: 2
输出: 91 
解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
*/

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n == 0) return 1
  if (n == 1) return 10
  let result = 91, dp = 81
  for (let i = 3; i <= n; i++) {
      dp *= 10 - i + 1
      result += dp
  }
  return result
};