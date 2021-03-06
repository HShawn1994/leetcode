/*
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let result = ''
  if (num1 === '0' || num2 === '0') return '0'
  const arr = Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i>= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
          const sum = arr[i + j + 1] + num1[i] * num2[j]
          arr[i + j + 1] = sum % 10
          arr[i + j] += ~~(sum / 10)
      }
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0 && i === 0) continue
      result += arr[i]
  }
  return result
};