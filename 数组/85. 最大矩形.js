/*
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6

*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  var largestRectangleArea = function(heights) {
      let stack = [-1], result = 0
      const peek = arr => arr[arr.length - 1]
      for (let i = 0; i < heights.length; i++) {
          while (peek(stack) !== -1 && heights[peek(stack)] >= heights[i]) {
              result = Math.max(result, heights[stack.pop()] * (i - peek(stack) - 1))
          }
          stack.push(i)
      }
      while(peek(stack) != -1) {
          result = Math.max(heights[stack.pop()] * (heights.length - peek(stack) - 1), result)
      }
      return result
  };
  if (!matrix.length) return 0
  let dp = Array(matrix[0].length).fill(0), result = 0
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0
      }
      result = Math.max(result, largestRectangleArea(dp))
  }
  return result
};