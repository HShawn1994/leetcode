/*
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回 n 皇后不同的解决方案的数量。

示例:

输入: 4
输出: 2
解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const cols = [], master = [], slave = []
  let result = 0
  const backtrack = row => {
      if (row === n) {
          result++
          return
      }
      for (let i = 0; i < n; i++) {
          const canUse = !cols[i] && !master[row - i + n - 1] && !slave[row + i]
          if (!canUse) continue
          cols[i] = true
          master[row - i + n - 1] = true
          slave[row + i] = true
          backtrack(row + 1)
          cols[i] = false
          master[row - i + n - 1] = false
          slave[row + i] = false
      }
  }
  backtrack(0)
  return result
};