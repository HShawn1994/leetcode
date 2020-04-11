/*
给定一个非空二维矩阵 matrix 和一个整数 k，找到这个矩阵内部不大于 k 的最大矩形和。

示例:

输入: matrix = [[1,0,1],[0,-2,3]], k = 2
输出: 2 
解释: 矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
说明：

矩阵内的矩形区域面积必须大于 0。
如果行数远大于列数，你将如何解答呢？
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  if (!matrix.length) return 0
  const m = matrix.length, n = matrix[0].length
  let result = -Infinity
  const getMax = dp => {
    let result = -Infinity, sum = max = dp[0]
    for (let i = 1; i < dp.length; i++) {
      if (sum > 0) sum += dp[i]
      else sum = dp[i]
      max = Math.max(sum, max)
    }
    if (max <= k) return max
    for (let i = 0; i < dp.length; i++) {
        let sum = 0
        for (let j = i; j < dp.length; j++) {
            sum += dp[j]
            if (sum > result && sum <= k) result = sum
            if (result == k) return result
        }
    }
    return result
  }
  for (let l = 0; l < n; l++) {
    let dp = Array(m).fill(0)
    for (let r = l; r < n; r++) {
      for (let i = 0; i < m; i++) dp[i] += matrix[i][r]
      result = Math.max(result, getMax(dp))
      if (result == k) return k;
    }
  }
  return result
};