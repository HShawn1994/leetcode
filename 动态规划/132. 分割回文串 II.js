/*
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的最少分割次数。

示例:

输入: "aab"
输出: 1
解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。

*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const len = s.length, dp = Array(len).fill().map((_, idx) => idx)
  const isPalindrome = str => {
    let left = 0, right = str.length - 1
    while (left <= right) { if (str[left++] !== str[right--]) return false }
    return true
  }
  for (let i = 0; i < len; i++) {
    if (isPalindrome(s.substring(0, i + 1))) {
      dp[i] = 0
      continue
    }
    for (let j = 0; j < i; j++) {
      if (isPalindrome(s.substring(j + 1, i + 1))) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[len - 1]
};

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const len = s.length, dp1 = Array(len).fill().map(_ => Array(len).fill(false))
  const dp2 = Array(len).fill().map((_, idx) => idx)
  for (let i = 0; i < len; i++) {
      for (let j = 0; j <= i; j++) {
          if (s[i] == s[j] && ((i - j <= 2) || dp1[i - 1][j + 1])) dp1[i][j] = true
      }
  }
  for (let i = 0; i < len; i++) {
      if (dp1[i][0]) {
          dp2[i] = 0
          continue
      }
      for (let j = 0; j < i; j++) {
          if (dp1[i][j + 1]) dp2[i] = Math.min(dp2[i], dp2[j] + 1)
      }
  }
  return dp2[len - 1]
};