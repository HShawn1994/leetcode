/*
给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length)
  if (a.length < len) a = '0'.repeat(len - a.length) + a
  if (b.length < len) b = '0'.repeat(len - b.length) + b
  let result = '', carry = 0
  for (let i = len - 1; i >= 0; i--) {
      const sum = Number(a[i]) + Number(b[i]) + carry
      carry = ~~(sum / 2)
      result = sum % 2 + result
  }
  if (carry > 0) result = '1' + result
  return result
};
