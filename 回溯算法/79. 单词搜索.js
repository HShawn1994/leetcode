/*
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board.length) return false
  const m = board.length, n = board[0].length, used = Array(m).fill(0).map(_ => Array(n))
  const vector = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const inArea = (row, col) => row >=0 && row < m && col >= 0 && col < n
  const dfs = (row, col, idx) => {
      if (idx === word.length - 1) return board[row][col] === word[word.length - 1]
      if (board[row][col] === word[idx]) {
          used[row][col] = true
          for (let i = 0; i < vector.length; i++) {
              const newRow = row + vector[i][0]
              const newCol = col + vector[i][1]
              if (inArea(newRow, newCol) && !used[newRow][newCol]) {
                  if (dfs(newRow, newCol, idx + 1)) return true
              }
          }
          used[row][col] = false
      }
      return false
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (dfs(i, j, 0)) return true
      }
  }
  return false
};