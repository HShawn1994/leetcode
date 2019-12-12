/*
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = []
  if (!matrix.length) return result
  let i = 0, m = matrix.length - 1, j = 0, n = matrix[0].length - 1
  while (true) {
      for (let k = j; k <= n; k++) {
          result.push(matrix[i][k])
      }
      if (++i > m) break
      for (let k = i; k <= m; k++) {
          result.push(matrix[k][n])
      }
      if (--n < j) break
      for (let k = n; k >= j; k--) {
          result.push(matrix[m][k])
      }
      if (--m < i) break
      for (let k = m; k >= i; k--) {
          result.push(matrix[k][j])
      }
      if (++j > n) break
  }
  return result
};