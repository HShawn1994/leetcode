/*
删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。

说明: 输入可能包含了除 ( 和 ) 以外的字符。

示例 1:

输入: "()())()"
输出: ["()()()", "(())()"]
示例 2:

输入: "(a)())()"
输出: ["(a)()()", "(a())()"]
示例 3:

输入: ")("
输出: [""]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
// dfs
var removeInvalidParentheses = function(s) {
  const n = s.length, dict = new Set()
  let left = right = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') left++
    if (s[i] === ')') {
      right = left === 0 ? right + 1 : right
      left = left > 0 ? left - 1 : left
    }
  }
  const dfs = (idx, path, lc, rc, ld, rd) => {
      if (idx === n) {
          if (ld === 0 && rd === 0) dict.add(path)
          return
      }
      const c = s[idx]
      if ((c == '(' && ld > 0) || (c == ')' && rd > 0)) {
        dfs(idx + 1, path, lc, rc, ld - (c === '(' ? 1 : 0), rd - (c === ')' ? 1 : 0))
      }
      if (c !== '(' && c !== ')') {
        dfs(idx + 1, path + c, lc, rc, ld, rd)
      } else if (c === '(') {
        dfs(idx + 1, path + c, lc + 1, rc, ld, rd)
      } else if (lc > rc) {
        dfs(idx + 1, path + c, lc, rc + 1, ld, rd)
      }
  }
  dfs(0, '', 0, 0, left, right)
  return [...dict]
};

// bfs
var removeInvalidParentheses = function(s) {
  let dict = new Set()
  dict.add(s)
  const isValid = s => {
    let cnt = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') cnt++
      if (s[i] === ')') cnt--
      if (cnt < 0) return false
    }
    return cnt === 0
  }
  while (true) {
    const valids = [...dict].filter(isValid)
    if (valids.length) return valids
    let next = new Set(), level = [...dict]
    for (let i = 0; i < level.length; i++) {
      const str = level[i]
      for (let j = 0; j < str.length; j++) {
        if (str[j] === '(' || str[j] === ')') next.add(str.substring(0, j) + str.substring(j + 1))
      }
    }
    dict = next
  }
};