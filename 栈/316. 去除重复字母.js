/*
给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

 

示例 1:

输入: "bcabc"
输出: "abc"
示例 2:

输入: "cbacdcbc"
输出: "acdb"
*/
/**
 * @param {string} s
 * @return {string}
 */
// 栈
var removeDuplicateLetters = function(s) {
  if (!s.length) return ''
  const stack = [], seen = new Set(), last = {}, n = s.length
  const top = stack => stack[stack.length - 1]
  for (let i = 0; i < n; i++) { last[s[i]] = i }
  for (let i = 0; i < s.length; i++) {
      const c = s[i]
      if (seen.has(c)) continue
      while(stack.length && c < top(stack) && last[top(stack)] > i) seen.delete(stack.pop())
      stack.push(c)
      seen.add(c)
  }
  return stack.join('')
};

