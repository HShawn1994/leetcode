/*
给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回一个空列表。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: []

解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。

*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  wordList.push(beginWord)
  const end = wordList.indexOf(endWord), result = []
  if (end === -1) return []
  let visited = [], quene = [[len - 1]], found = false
  visited[len - 1] = true
  const canConvert = (s1, s2) => {
      let count = 0
      for (let i = 0; i < s1.length; i++) {
          if (s1[i] !== s2[i] && ++count > 1) return false 
      }
      return count === 1
  }
  while (quene.length && !found) {
      let len = quene.length
      const toMarked = []
      while (len--) {
        const path = quene.shift()
        const str = wordList[path[path.length - 1]]
        for (let i = 0; i < wordList.length; i++) {
          if (visited[i] || !canConvert(str, wordList[i])) continue
          path.push(i)
          if (wordList[i] === endWord) {
            found = true
            result.push(path.map(idx => wordList[idx]))
          }
          quene.push(path.slice())
          path.pop()
          toMarked.push(i)
        }
      }
      toMarked.forEach(idx => { visited[idx] = true })
  }
  return result
};
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const end = wordList.indexOf(endWord), result = []
  if (end === -1) return []
  const allWords = new Set(wordList)
  let visited = { beginWord: true }, quene = [[beginWord]], found = false
  const getNeighbors = str => {
    const result = []
    for (let i = 0; i < str.length; i++) {
      for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
        const tempStr = str.substr(0, i) + String.fromCharCode(j) + str.substr(i + 1)
        if (allWords.has(tempStr)) result.push(tempStr)
      }
    }
    return result
  }
  while (quene.length && !found) {
      let len = quene.length
      const toMarked = []
      while (len--) {
        const path = quene.shift()
        const str = path[path.length - 1]
        const neighbors = getNeighbors(str)
        neighbors.forEach(neighbor => {
          if (!visited[neighbor]) {
            path.push(neighbor)
            if (neighbor === endWord) {
              found = true
              result.push(path.slice())
            }
            quene.push(path.slice())
            path.pop()
            toMarked.push(neighbor)
          }
        })
      }
      toMarked.forEach(neighbor => { visited[neighbor] = true })
  }
  return result
};