/*
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
*/

 /**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = Array(rowIndex + 1).fill(0)
    res[0] = 1
    for (let i = 1; i < rowIndex + 1; i++) {
        for (let j = i; j > 0; j--) {
            res[j] = res[j] + res[j - 1]
        }
    }
    return res
};
