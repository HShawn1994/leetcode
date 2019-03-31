//题目： 按奇偶排序数组 II
/**
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
你可以返回任何满足上述条件的数组作为答案。

示例：
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
**/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let oddIndexStack = []
    let evenIndexStack = []
    let cur = 0
    let swap = (a, b) => {
        let temp = A[a]
        A[a] = A[b]
        A[b] = temp
    }
    while (cur <= A.length - 1) {
        if (cur % 2 === 0 && A[cur] % 2 !== 0) {
            if (evenIndexStack.length) {
                swap(cur, evenIndexStack.pop())
            } else {
                oddIndexStack.push(cur)
            }
        } else if (cur % 2 !== 0 && A[cur] % 2 === 0) {
            if (oddIndexStack.length) {
                swap(cur, oddIndexStack.pop())
            } else {
                evenIndexStack.push(cur)
            }
        }
        cur++
    }
    return A
};

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let oddStack = A.filter(a => a % 2 !== 0)
    let evenStack = A.filter(b => b % 2 === 0)
    let res = []
    for (let i = 0; i < A.length; i++) {
        if (i % 2) res.push(oddStack.shift())
        else res.push(evenStack.shift())
    }
    return res
};
