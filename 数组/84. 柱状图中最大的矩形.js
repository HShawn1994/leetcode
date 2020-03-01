/*
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 



以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

 



图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

 

示例:

输入: [2,1,5,6,2,3]
输出: 10

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const helper = (start, end) => {
      if (start > end) return 0
      let minHeight = start
      for (let i = start; i <= end; i++) {
          if (heights[i] < heights[minHeight]) minHeight = i
      }
      return Math.max(
          heights[minHeight] * (end - start + 1),
          helper(start, minHeight - 1),
          helper(minHeight + 1, end)
      )
  }
  return helper(0, heights.length - 1)
};

/**
 * @param {number[]} heights
 * @return {number}
 */
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

