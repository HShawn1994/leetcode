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
  const m = grid.length, n = grid[0].length, dirs = [[0, 1], [1, 0]]
  let cells = m * n + 1
  const parent = Array(cells).fill().map((_, idx) => idx), rank = Array(cells).fill().map((_, idx) => idx)
  const find = i => {
    while (i !== parent[i]) i = parent[i]
    return i
  }
  const join = (x, y) => {
    x = find(x), y = find(y)
    if (x === y) return
    if (rank[x] > rank[y]) parent[y] = x
    else if (rank[x] < rank[y]) parent[x] = y
    else {
      parent[y] = x
      rank[y]++
    }
    cells--
  }
  const getIdx = (x, y) => x * n + y
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') {
        join(getIdx(i, j), m * n)
        continue
      }
      dirs.forEach(dir => {
        const newX = dir[0] + i, newY = dir[1] + j
        if (newX < m && newY < n && grid[newX][newY] === '1') join(getIdx(i, j), getIdx(newX, newY))
      })
    }
  }
  return cells - 1
};