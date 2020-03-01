/*
给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。

提示:

你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]], result = []
  const m = board.length, n = board[0].length
  const dfs = (x, y, word, idx) => {
      const isValid = x >= 0 && x < m && y >= 0 && y < n
      if (!isValid) return false
      let t = board[x][y]
      if (t !== word[idx]) return false
      if (idx === word.length - 1) return true
      board[x][y] = '$'
      const validNext = dirs.some(dir => dfs(x + dir[0], y + dir[1], word, idx + 1))
      board[x][y] = t
      if (validNext) return true
      return false
  }
  const exist = word => {
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (dfs(i, j, word, 0)) return true
          }
      }
      return false
  }
  words.forEach(word => { if (exist(word)) result.push(word) })
  return result
};


/* 字典树 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class Trie {
  constructor() {
      this.next = {}
      this.word = ''
  }
  insert (word) {
      let node = this
      for (let i = 0; i < word.length; i++) {
          if (!node.next[word[i]]) node.next[word[i]] = new Trie()
          node = node.next[word[i]]
      }
      node.word = word
  }
}

var findWords = function(board, words) {
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]], result = []
  const root = new Trie()
  words.forEach(word => { root.insert(word) })
  const m = board.length, n = board[0].length
  const dfs = (x, y, node) => {
      const isValid = x >= 0 && x < m && y >= 0 && y < n
      if (!isValid) return 
      let t = board[x][y]
      if (t === '$' || !node.next[t]) return 
      node = node.next[t]
      if (node.word) {
          result.push(node.word)
          node.word = ''
      }
      board[x][y] = '$'
      dirs.forEach(dir => {dfs(x + dir[0], y + dir[1], node)})
      board[x][y] = t
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          dfs(i, j, root)
      }
  }
  return result
};