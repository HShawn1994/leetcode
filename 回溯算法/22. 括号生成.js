/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function fn (l = n, r = n, str = '') {
        if (l > r) return
        if (l == r && l == 0) res.push(str)
        else {
            if (l > 0) fn(l - 1, r, str + '(')
            if (r > 0) fn(l, r - 1, str + ')')
        }
    }
    fn()
    return res
};
