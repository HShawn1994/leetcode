/*
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let firstRow = false, firstCol = false
  for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] === 0) firstRow = true
  }
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === 0) firstCol = true
  }
  for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
          if (matrix[i][j] == 0) {
              matrix[0][j] = 0
              matrix[i][0] = 0
          }
      }
  }
  for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[0].length; j++) {
          if (matrix[i][0] == 0 || matrix[0][j] == 0) {
              matrix[i][j] = 0
          }
      }
  }
  if (firstRow) {
      for (let i = 0; i < matrix[0].length; i++) {
          matrix[0][i] = 0
      }
  }
  if (firstCol) {
      for (let i = 0; i < matrix.length; i++) {
          matrix[i][0] = 0
      }
  }
};