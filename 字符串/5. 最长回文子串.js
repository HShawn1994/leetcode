/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
      let temp = ''
      for (let j = 0; (i - j >= 0) && (j + i < s.length); j++) {
          if (s[i - j] !== s[j + i]) {
              break
          }
          temp = s.substring(i - j, i + j + 1) 
      }
      if (temp.length > result.length) result = temp
      for (let j = 0; (i - j >= 0) && (i + j + 1 < s.length); j++) {
          if (s[i - j] !== s[i + j + 1]) {
              break
          }
          temp = s.substring(i - j, i + j + 2)
      }
      if (temp.length > result.length) result = temp
  }
  return result
};

var longestPalindrome = function(s) {
  let result = '', right = -1, center = -1
  const radius = []
  const str = '#' + s.split('').join('#') + '#' 
  for (let i = 0; i < str.length; i++) {
      radius[i] = right > i ? Math.min(radius[2 * center - i], right - i) : 1
      while(i - radius[i] >= 0 && i + radius[i] < str.length && (str[i + radius[i]] === str[i - radius[i]])) radius[i]++
      if (radius[i] + i > right) {
          right = radius[i] + i
          center = i
      }
      if (radius[i] - 1 > result.length) {
          result = str.substring(i - radius[i] + 1, i + radius[i] - 1).replace(/#/g, '')
      }
  }
  return result
};

