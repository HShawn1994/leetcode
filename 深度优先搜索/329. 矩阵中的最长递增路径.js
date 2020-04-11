/*
给定一个整数矩阵，找出最长递增路径的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

示例 1:

输入: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
输出: 4 
解释: 最长递增路径为 [1, 2, 6, 9]。
示例 2:

输入: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
输出: 4 
解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (!matrix.length) return 0
  let result = 0, m = matrix.length, n = matrix[0].length, dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]], map = {}
  const dfs = (x, y, pre) => {
      const isValid = x >= 0 && x < m && y >= 0 && y < n
      if (!isValid || matrix[x][y] <= pre) return 0
      let key = x + '+' + y
      if (map[key]) return map[key]
      let max = 0
      for (let i = 0; i < dirs.length; i++) {
          const newX = dirs[i][0] + x, newY = dirs[i][1] + y
          max = Math.max(dfs(newX, newY, matrix[x][y]), max)
      }
      return map[key] = max + 1
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        result = Math.max(dfs(i, j, -Infinity), result)
      }
  }
  return result
};