/*
给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

示例 1:

输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
输出: 16 
解释: 这两个单词为 "abcw", "xtfn"。
示例 2:

输入: ["a","ab","abc","d","cd","bcd","abcd"]
输出: 4 
解释: 这两个单词为 "ab", "cd"。
示例 3:

输入: ["a","aa","aaa","aaaa"]
输出: 0 
解释: 不存在这样的两个单词。
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  if (words.length < 2) return 0
  let n = words.length, result = 0, bits = [], map = {}
  words.forEach((word, idx) => {
      if (map[word]) bits[idx] = map[word]
      else {
          let bit = 0
          for (let i = 0; i < word.length; i++) {
              bit |= 1 << word[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1
          }
          map[word] = bits[idx] = bit
      }
  })
  for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
          if (!(map[words[i]] & map[words[j]])) result = Math.max(result, words[i].length * words[j].length)
      }
  }
  return result
};