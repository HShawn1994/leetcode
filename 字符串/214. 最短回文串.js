/*
给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

示例 1:

输入: "aacecaaa"
输出: "aaacecaaa"
示例 2:

输入: "abcd"
输出: "dcbabcd"
*/

/**
 * @param {string} s
 * @return {string}
 */
// 暴力
var shortestPalindrome = function(s) {
  const t = s.split('').reverse().join(''), n = s.length
  for (let i = 0; i < n; i++) {
      if (s.substring(0, n - i) === t.substring(i)) {
          return t.substring(0, i) + s
      }
  }
  return ""
};
// 递归
var shortestPalindrome = function(s) {
  let i = 0, n = s.length
  for (let j = n - 1; j >= 0; j--) {
      if (s[i] === s[j]) i++ 
  }
  if (i === n) return s
  return s.substring(i).split('').reverse().join('') + shortestPalindrome(s.substring(0, i)) + s.substring(i)
};
//KMP
var shortestPalindrome = function(s) {
  const rev = s.split('').reverse().join(''), n1 = s.length
  const newS = s + '#' + rev, n2 = newS.length, next = Array(n).fill(0)
  for (let i = 1; i < n2; i++) {
    let t = next[i - 1]
    while( t > 0 && newS[i] !== newS[t]) t = next[t - 1]
    if (newS[i] === newS[t]) t++
    next[i] = t
  }
  return rev.substr(0, n1 - next[n1 - 1]) + s
};
//马拉车
var shortestPalindrome = function(s) {
  const t = '#' + s.split('').join('#') + '#', n = t.length, radius = []
  let right = 0, center = 0, max = 0
  for (let i = 0; i < n; i++) {
      radius[i] = right > i ? Math.min(radius[2 * center - i], right - i) : 0
      while (i >= radius[i] && radius[i] + i + 1 < n && t[i + 1 + radius[i]] === t[i - 1 - radius[i]]) radius[i]++
      if (radius[i] + i > right) {
          right = radius[i] + i
          center = i
      }
      if ((i - radius[i]) >>> 1 === 0) max = Math.max(radius[i], max)
  }
  return s.substring(max).split('').reverse().join('') + s;
};