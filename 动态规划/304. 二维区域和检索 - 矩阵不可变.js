/*
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。


上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

示例:

给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
说明:

你可以假设矩阵不可变。
会多次调用 sumRegion 方法。
你可以假设 row1 ≤ row2 且 col1 ≤ col2。
*/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (!matrix.length || !matrix[0].length) return
  const m = matrix.length, n = matrix[0].length
  const dp = Array(m + 1).fill().map(_ => Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] + matrix[i][j] - dp[i][j]
  }
  this.dp = dp
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1]
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/