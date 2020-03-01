/*
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。

*/
var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord)
    const end = wordList.indexOf(endWord), len = wordList.length, result = []
    if (end === -1) return 0
    let visited1 = [], quene1 = [len - 1]
    let visited2 = [], quene2 = [end]
    visited1[len - 1] = true
    visited2[end] = true
    const canConvert = (s1, s2) => {
        let count = 0
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i] && ++count > 1) return false 
        }
        return count === 1
    }
    let count = 0
    while (quene1.length && quene2.length) {
        let len1 = quene1.length, len2 = quene2.length
        count++
        if (len1 > len2) {
            len1 = len2
            let tempQuene = quene1, tempVisited = visited1
            quene1 = quene2
            quene2 = tempQuene
            visited1 = visited2
            visited2 = tempVisited
        }
        while (len1--) {
          const str1 = wordList[quene1.shift()]
          for (let i = 0; i < wordList.length; i++) {
              if (visited1[i] || !canConvert(str1, wordList[i])) continue
              if (visited2[i]) return count + 1
              visited1[i] = true
              quene1.push(i)
          }
        }
    }
    return result
  };