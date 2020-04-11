/*
实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

示例 1:

输入: "3+2*2"
输出: 7
示例 2:

输入: " 3/2 "
输出: 1
示例 3:

输入: " 3+5 / 2 "
输出: 5
说明：

你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。

*/

/**
 * @param {string} s
 * @return {number}
 */

 // 双栈法
var calculate = function(s) {
  const nums = [], ops = [], m = {
      '+': 0,
      '-': 0,
      '*': 1,
      '/': 1
  }
  let i = 0
  const cal = (nums, ops) => {
      let a = nums.pop(), b = nums.pop(), op = ops.pop()
      if (op === '+') nums.push(a + b)
      else if (op === '-') nums.push(b - a)
      else if (op === '*') nums.push(a * b)
      else nums.push(Math.floor(b / a))
  }
  while (i < s.length) {
      if (s[i] === ' ') i++
      else if (!isNaN(s[i])) {
          let temp = s[i++]
          while (!isNaN(s[i])) temp += s[i++]
          nums.push(Number(temp)) 
      } else {
          while (ops.length && m[ops[ops.length - 1]] >= m[s[i]]) cal(nums, ops)
          ops.push(s[i++])
      }
  }
  while (ops.length) cal(nums, ops)
  return nums[0]
};

// 逆波兰表达式
var calculate = function(s) {
  const getPRN = s => {
      let m = {'+': 0, '-': 0, '/': 1, '*': 1}, result = [], ops = [], i = 0
      while (i < s.length) {
          if (s[i] === ' ') i++
          else if (!isNaN(s[i])) {
              let temp = s[i++]
              while (!isNaN(s[i])) temp += s[i++]
              result.push(Number(temp)) 
          } else {
              while (ops.length && m[ops[ops.length - 1]] >= m[s[i]]) result.push(ops.pop())
              ops.push(s[i++])
          }
      }
      while (ops.length) result.push(ops.pop())
      return result
  }
  const evalPRN = tokens => {
      const result = []
      tokens.forEach(t => {
          if (!isNaN(t)) result.push(t)
          else {
              const a = result.pop(), b = result.pop()
              if (t === '+') result.push(a + b)
              else if (t === '-') result.push(b - a)
              else if (t === '*') result.push(b * a)
              else result.push(Math.floor(b / a))
          }
      })
      return result[0]
  }
  return evalPRN(getPRN(s))
};