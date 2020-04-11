/*
给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

示例:

输入: 13
输出: 6 
解释: 数字 1 出现在以下数字中: 1, 10, 11, 12, 13 。
*/
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let result = 0, i = 1
    while (i <= n) {
      const divider = i * 10
      result += Math.floor(n / divider) * i + Math.min(Math.max(n % divider - i + 1, 0), i) 
      i *= 10
    }
    return result
};