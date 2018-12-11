//题目：  无重复字符的最长子串

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let left = 0
    return s.split('').reduce((max, v, i) => {
      left = map.get(v) >= left ? map.get(v) + 1 : left
      map.set(v, i)
      return Math.max(max, i - left + 1)
    }, 0)
}
