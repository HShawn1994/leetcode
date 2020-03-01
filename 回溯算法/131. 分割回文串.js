/*
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = []
  const isPalindrome = str => {
    let i = 0; len = str.length - 1
    while (i <= len) {
      if (str[i++] !== str[len--]) return false
    }
    return true
  }
  const dfs = (start, end, arr) => {
    if (start === end) {
      result.push(arr.slice())
      return
    }
    for (let i = start; i < end; i++) {
      const str = s.substring(start, i + 1)
      if (!isPalindrome(str)) continue
      arr.push(str)
      dfs(i + 1, end, arr)
      arr.pop()
    }
  }
  dfs(0, s.length, [])
  return result
};