/*
给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。

示例 1:

输入: "2-1-1"
输出: [0, 2]
解释: 
((2-1)-1) = 0 
(2-(1-1)) = 2
示例 2:

输入: "2*3-4*5"
输出: [-34, -14, -10, -10, 10]
解释: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
*/

/**
 * @param {string} input
 * @return {number[]}
 */
const map = {}, ops = new Set(['-', '+', '*'])
const cal = (x, y, op) => {
    const map = {
    '+': x + y,
    '-': x - y,
    '*': x * y
    }
    return map[op]
}
// 递归
var diffWaysToCompute = function(input) {
    if (map[input]) return map[input]
    if (!input) return []
    const n = input.length, result = []
    for (let i = 0; i < n; i++) {
        if (!ops.has(input[i])) continue
        let result1 = diffWaysToCompute(input.substring(0, i))
        let result2 = diffWaysToCompute(input.substring(i + 1))
        for (let j = 0; j < result1.length; j++) {
            for (let k = 0; k < result2.length; k++) {
                result.push(cal(result1[j], result2[k], input[i]))
            }
        }
    }
    if (!result.length) result.push(Number(input))
    return map[input] = result
};
// 动态规划
var diffWaysToCompute = function(input) {
  const nums = [], opss = []
  for (let i = 0; i < input.length; i++) {
    if (ops.has(input[i])) {
      opss.push(input[i])
    } else {
      let temp = input[i++]
      while (!isNaN(input[i])) temp += input[i++]
      nums.push(Number(temp))
    }
  }
  const n = nums.length, dp = Array(n).fill().map(_ => [])
  for (let i = 0; i < n; i++) dp[i][i] = [nums[i]]
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      let k = i + j - 1
      if (k >= n) break
      let result = []
      for (s = j; s < k; s++) {
        const result1 = dp[j][s], result2 = dp[s + 1][k]
        for (let m = 0; m < result1.length; m++) {
          for (let n = 0; n < result2.length; n++) {
              result.push(cal(result1[m], result2[n], opss[s]))
          }
        }
      }
      dp[j][k] = result
    }
  }
  return dp[0][n - 1]
};