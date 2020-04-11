/*
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = 1, right = num
  while (left <= right) {
    let mid = (left + right) >> 1
    if (mid * mid == num) return true
    else if (mid * mid < num) left = mid + 1
    else right = mid - 1
  }
  return false
};