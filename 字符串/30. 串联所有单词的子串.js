/*
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
示例 2：

输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]

*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!words.length || !s) return []
  const len = words[0].length, result = [], m1 = {}
  for (let i = 0; i < words.length; i++) {
      m1[words[i]] = m1[words[i]] ? m1[words[i]] + 1 : 1
  }
  for (let i = 0; i < len; i++) {
      let left = i; right = i, count = 0
      let m2 = {}
      while(right + len <= s.length) {
          const str = s.substr(right, len)
          right += len
          if (!m1[str]) {
              count = 0
              m2 = {}
              left = right
          } else {
              m2[str] = m2[str] ? m2[str] + 1 : 1
              count++
              while(m2[str] > m1[str]) {
                  count--
                  const str1 = s.substr(left, len)
                  left += len
                  m2[str1] = m2[str1] ? m2[str1] - 1 : -1
              }
              if (count === words.length) result.push(left)
          }
      }
  }
  return result
};