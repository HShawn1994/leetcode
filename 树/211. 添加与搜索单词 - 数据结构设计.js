/*
设计一个支持以下两种操作的数据结构：

void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。

示例:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
说明:

你可以假设所有单词都是由小写字母 a-z 组成的。
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.next = {}
  this.isEnd = false
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this
  for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) node.next[word[i]] = new WordDictionary()
      node = node.next[word[i]]
  }
  node.isEnd = true
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const helper = (node, word) => {
      for (let i = 0; i < word.length; i++) {
          if (word[i] === '.') {
              return Object.values(node.next).reduce((to, cur) => to || helper(cur, word.substring(i + 1)), false)
          } else {
              node = node.next[word[i]]
              if (!node) return false
          }
      }
      return node.isEnd
  }
  return helper(this, word)
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/