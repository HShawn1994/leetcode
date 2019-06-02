/*
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * 非递归
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []
    if (!numRows) return res
    let list = []
    for (let i = 0; i < numRows; i++) {
        list.push(1)
        for (let j = list.length - 2; j > 0; j--) {
            list[j] = (list[j] || 0) + list[j - 1]
        }
        res.push(list.slice())
    }
    return res
};

/**
 * 递归
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = []
    if (!numRows) return res
    const helper = (res, row, col) => {
        if (res[row - 1][col - 1]) return res[row - 1][col - 1]
        if (row === col || col === 1) return 1
        return helper(res, row - 1, col) + helper(res, row - 1, col - 1)
    }
    for (let i = 1; i <= numRows; i++) {
        res.push([])
        for (let j = i; j > 0; j--) {
            res[i - 1][j - 1] = helper(res, i, j)
        }
    }
    return res
};
