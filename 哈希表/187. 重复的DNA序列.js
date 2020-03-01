/*
所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列（子串）。

 

示例：

输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC", "CCCCCAAAAA"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length <= 10) return []
  const map = {}, len = s.length, result = []
  for (let i = 0; i <= len - 10; i++) {
      let str = s.substr(i, 10)
      if (map[str] === 1) {
          result.push(str)
      }
      map[str] = map[str] ? map[str] + 1 : 1
  }
  return result
};