/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = new Set('aeiouAEIOU'), i = 0, j = s.length - 1, t = s.split('')
  while (i < j) {
      if (vowels.has(s[i])) {
          if (vowels.has(s[j])) {
              [t[i], t[j]] = [t[j], t[i]]
              i++
          }
          j--
      } else {
          i++
      }
  }
  return t.join('')
};  