// 题目： 重复 N 次的元素

/**
在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
返回重复了 N 次的那个元素。

示例 1：
输入：[1,2,3,3]
输出：3
**/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let obj = {}
    for (let i = 0; i < A.length; i++) {
        if (obj[A[i]] == null) obj[A[i]] = 1
        else return A[i]
    }
};