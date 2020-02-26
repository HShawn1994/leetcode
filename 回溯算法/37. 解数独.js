/*
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
空白格用 '.' 表示。

Note:

给定的数独序列只包含数字 1-9 和字符 '.' 。
你可以假设给定的数独只有唯一解。
给定数独永远是 9x9 形式的。
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const n = 3, N = 9
  const rows = Array(N).fill(0).map(_ => Array(N + 1))
  const cols = Array(N).fill(0).map(_ => Array(N + 1))
  const boxes = Array(N).fill(0).map(_ => Array(N + 1))
  const getBoxIdx = (row, col) => ~~(row / n) * n + ~~(col / n)
  const setCell = (row, col, num, value) => {
    rows[row][Number(num)] = value
    cols[col][Number(num)] = value
    boxes[getBoxIdx(row, col)][Number(num)] = value
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const num = board[i][j]
      if (num != '.') setCell(i, j, num, true)
    }
  }
  const helper = (row, col) => {
    if (col === N) {
      col = 0
      row++
      if (row === N) return true
    }
    if (board[row][col] === '.') {
      for (let i = 1; i <= 9; i++) {
        const canUse = !rows[row][i] && !cols[col][i] && !boxes[getBoxIdx(row, col)][i]
        if (!canUse) continue
        setCell(row, col, i, true)
        board[row][col] = i + ''
        if (helper(row, col + 1)) return true
        board[row][col] = '.'
        setCell(row, col, i, false)
      }
    } else {
      return helper(row, col + 1)
    }
    return false
  }
  helper(0, 0)
};