/*
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = Array(n).fill(0).map(_ => [])
  let row = 0, rows = n - 1, col = 0, cols = n - 1, num = 1
  while (true) {
      for (let i = col; i <= cols; i++) {
          result[row][i] = num++
      }
      if (++row > rows) break
      for (let i = row; i <= rows; i++) {
          result[i][cols] = num++
      }
      if (--cols < col) break
      for (let i = cols; i >= col; i--) {
          result[rows][i] = num++
      }
      if (--rows < row) break
      for (let i = rows; i >= row; i--) {
          result[i][col] = num++
      }
      if (++col > cols) break
  }
  return result
};