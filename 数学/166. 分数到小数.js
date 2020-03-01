/*
给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。

如果小数部分为循环小数，则将循环的部分括在括号内。

示例 1:

输入: numerator = 1, denominator = 2
输出: "0.5"
示例 2:

输入: numerator = 2, denominator = 1
输出: "2"
示例 3:

输入: numerator = 2, denominator = 3
输出: "0.(6)"
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return '0'
  let result = [], notPositive = numerator < 0 ^ denominator < 0, map = {}
  let num1 = Math.abs(numerator), num2 = Math.abs(denominator)
  let reminder = num1 % num2
  if (notPositive) result.push('-')
  result.push(Math.floor(num1 / num2))
  if (reminder === 0) return result.join('')
  result.push('.')
  while (reminder) {
      if (map[reminder]) {
          result.splice(map[reminder], 0, '(')
          result.push(')')
          break
      }
      map[reminder] = result.length
      reminder *= 10
      result.push(Math.floor(reminder / num2))
      reminder %= num2
  }
  return result.join('')
};