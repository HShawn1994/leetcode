/*
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 暴力法
var maximalSquare = function(matrix) {
  if (!matrix.length) return 0
  let m = matrix.length, n = matrix[0].length, max = 0
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === '0') continue
          let flag = true, len = 1
          while (len + i < m && len + j < n && flag) {
              for (let k = 0; k <= len; k++) {
                  if (matrix[i + len][j + k] == '0' || matrix[i + k][j + len] == '0') {
                      flag = false
                      break
                  }
              }
              if (flag) len++
          }
          max = Math.max(len, max)
      }
  }
  return max * max
};
// 二维DP
var maximalSquare = function(matrix) {
    if (!matrix.length) return 0
    let m = matrix.length, n = matrix[0].length, max = 0
    const dp = Array(m + 1).fill().map(_ => Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === '0') continue
            dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
            max = Math.max(max, dp[i][j])
        }
    }
    return max * max
};
// 一维DP
var maximalSquare = function(matrix) {
    if (!matrix.length) return 0
    let m = matrix.length, n = matrix[0].length, max = 0, pre = 0
    const dp = Array(n + 1).fill(0)
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let temp = dp[j]
            if (matrix[i - 1][j - 1] === '0') dp[j] = 0
            else dp[j] = Math.min(dp[j - 1], pre, dp[j]) + 1
            pre = temp
            max = Math.max(max, dp[j])
        }
    }
    return max * max
};