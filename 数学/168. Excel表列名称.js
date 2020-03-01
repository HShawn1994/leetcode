/*
给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
示例 1:

输入: 1
输出: "A"
示例 2:

输入: 28
输出: "AB"
示例 3:

输入: 701
输出: "ZY"
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n < 1) return ''
  let result = ''
  while (n > 0) {
     result = String.fromCharCode(--n % 26 + 'A'.charCodeAt(0)) + result
     n = Math.floor(n / 26) 
  }
  return result
};