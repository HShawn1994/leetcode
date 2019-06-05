/*
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    const helper = (cur, temp) => {
        if (temp.length === k) {
            res.push(temp)
            return
        }
        for (let i = cur; i <= n; i++) {
            temp.push(i)
            helper(i + 1, temp.slice())
            temp.pop()
        }
    }
    helper(1, [])
    return res
};