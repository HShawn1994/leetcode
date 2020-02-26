/*
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const cols = Array(n)
  const master = Array(2 * n - 1)
  const slave = Array(2 * n - 1)
  const setCell = (row, col, value) => {
      cols[col] = value
      master[row - col + n - 1] = value
      slave[row + col] = value
  }
  const result = []
  const getBoard = stack => stack.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
  const backtrack = (row, stack) => {
      if (row === n) {
          result.push(getBoard(stack.slice()))
          return
      }
      for (let i = 0; i < n; i++) {
          const canUse = !cols[i] && !master[row - i + n - 1] && !slave[row + i]
          if (!canUse) continue
          setCell(row, i, true)
          stack.push(i)
          backtrack(row + 1, stack)
          setCell(row, i, false)
          stack.pop()
      }
  }
  backtrack(0, [])
  return result
};