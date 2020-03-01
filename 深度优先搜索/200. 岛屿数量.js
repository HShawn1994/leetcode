/*
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length) return 0
  const m = grid.length, n = grid[0].length, dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  let result = 0
  const dfs = (x, y) => {
      const isValid = x >= 0 && x < m && y >=0 && y < n
      if (!isValid || grid[x][y] === '0') return
      grid[x][y] = '0'
      for (let i = 0; i < dirs.length; i++) dfs(dirs[i][0] + x, dirs[i][1] + y)
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
              dfs(i, j)
              result++
          }
      }
  }
  return result
};