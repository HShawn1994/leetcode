/*
累加数是一个字符串，组成它的数字可以形成累加序列。

一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。

说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

示例 1:

输入: "112358"
输出: true 
解释: 累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
示例 2:

输入: "199100199"
输出: true 
解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
进阶:
你如何处理一个溢出的过大的整数输入?
*/
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  const add = (s1, s2) => {
      let n1 = s1.length - 1, n2 = s2.length - 1, curry = 0, result = ''
      while (n1 >= 0 || n2 >= 0 || curry > 0) {
          let t1 = n1 >= 0 ? Number(s1[n1--]) : 0
          let t2 = n2 >= 0 ? Number(s2[n2--]) : 0
          result = (t1 + t2 + curry) % 10 + result
          curry = (t1 + t2 + curry) >= 10 ? 1 : 0
      }
      return result
  }
  const dfs = (s, i, j, k) => {
      // 非法数字如01， 03
      if (s[i] == '0' && j - i > 1 || s[j] == '0' && k - j > 1) return false
      let a = s.substring(i, j), b = s.substring(j, k), sum = add(a, b), n = sum.length
      if (k + n > s.length || sum != s.substr(k, n)) return false
      if (k + n === s.length) return true
      return dfs(s, j, k, k + n)
  }
  for (let i = 1; i < num.length - 1; i++) {
      for (j = i + 1; j < num.length; j++) if (dfs(num, 0, i, j)) return true
  }
  return false
};