/*
给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

示例 1:

输入: ["abcd","dcba","lls","s","sssll"]
输出: [[0,1],[1,0],[3,2],[2,4]] 
解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
示例 2:

输入: ["bat","tab","cat"]
输出: [[0,1],[1,0]] 
解释: 可拼接成的回文串为 ["battab","tabbat"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const map = {}, n = words.length, result = []
  if (!n) return result
  for (let i = 0; i < n; i++) map[words[i]] = i
  const check = (s, i, j) => {
    while (i < j) { if (s[i++] !== s[j--]) return false }
    return true
  }
  const getPreffix = s => {
    let result = []
    for (let i = 0; i < s.length; i++) {
      if (check(s, i, s.length - 1)) result.push(s.substring(0, i))
    }
    return result
  }
  const getSuffix = s => {
    let result = []
    for (let i = 0; i < s.length; i++) {
      if (check(s, 0, i)) result.push(s.substring(i + 1))
    }
    return result
  }
  for (let i = 0; i < n; i++) {
    const s = words[i], t = s.split('').reverse().join('')
    if (map[t] != null && map[t] !== i) result.push([i, map[t]])
    const preffixes = getPreffix(s), suffixes = getSuffix(s)
    console.log(preffixes, suffixes)
    for (let j = 0; j < suffixes.length; j++) {
      const m = suffixes[j].split('').reverse().join('')
      if (map[m] != null) result.push([map[m], i])
    }
    for (let j = 0; j < preffixes.length; j++) {
      const m = preffixes[j].split('').reverse().join('')
      if (map[m] != null) result.push([i, map[m]])
    }
  }
  return result
};