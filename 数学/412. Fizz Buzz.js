/*
写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

n = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let res = [], i = 3, j = 5, m = 15
  for (let k = 1; k <= n; k++) {
      if (k === m) {
          res.push('FizzBuzz')
          m = k + 15
          j = k + 5
          i = k + 3
      } else if (k === i) {
          res.push('Fizz')
          i = k + 3
      } else if (k === j) {
          res.push('Buzz')
          j = k + 5
      } else {
          res.push(k + '')
      }
  }
  return res
};