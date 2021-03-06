/*
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    return haystack.indexOf(needle)
};

/**KMP
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const getNext = p => {
  const next = [-1]
  let k = -1
  let j = 0
  while (j < p.length - 1) {
      if (k === -1 || p[k] === p[j]) {
          j++
          k++
          if (p[j] !== p[k]) {
              next[j] = k
          } else {
              next[j] = next[k]
          }
      } else {
          k = next[k]
      }
  }
  return next
}
var strStr = function(haystack, needle) {
  const next = getNext(needle)
  let j = 0, i = 0
  const iLen = haystack.length, jLen = needle.length
  while (i < iLen && j < jLen) {
         if (j === -1 || haystack[i] === needle[j]) {
             i++
             j++
         } else {
             j = next[j]
         }
  }
  if (j === jLen) {
      return i - j
  }
  return -1
};