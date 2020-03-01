/*
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
示例 2：

输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。
示例 3：

输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const dp = [true], dict = new Set(wordDict), result = []
  for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
          if (dp[j] && dict.has(s.substring(j, i))) {
              dp[i] = true
              break
          }
      }
  }
  if (!dp[s.length]) return result
  const dfs = (end, arr) => {
      if (end === 0) {
          result.push(arr.join(' '))
          return
      }
      for (let i = 0; i < end; i++) {
          const suffix = s.substring(i, end)
          if (dp[i] && dict.has(suffix)) {
              arr.unshift(suffix)
              dfs(i, arr)
              arr.shift() 
          }
      }
  }
  dfs(s.length, [])
  return result
};