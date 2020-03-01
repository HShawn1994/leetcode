/*
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (!s || !t) return ''
  const m1 = {}, m2 = {}
  for (let i = 0; i < t.length; i++) m1[t[i]] = m1[t[i]] ? m1[t[i]] + 1 : 1
  let result = Number.MAX_SAFE_INTEGER, right = 0, left = 0, match = 0, start = 0
  while (right < s.length) {
      const char1 = s[right]
      if (m1[char1]) {
          m2[char1] = m2[char1] ? m2[char1] + 1 : 1
          if (m1[char1] === m2[char1]) match++
      }
      right++
      while (match === Object.keys(m1).length) {
          if (right - left < result) {
              start = left
              result = right - left
          }
          const char2 = s[left]
          if (m1[char2]) {
              m2[char2] = m2[char2] ? m2[char2] - 1 : -1
              if (m1[char2] > m2[char2]) match--
          }
          left++
      }
  }
  return result === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, result)
};