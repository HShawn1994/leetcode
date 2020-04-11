/*
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    nums.forEach(it => {
        obj[it] = obj[it] ? obj[it] + 1 : 1
    })
    let keys = Object.keys(obj).sort((a, b) => obj[a] - obj[b])
    return Number(keys[keys.length - 1])
};

// 排序
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b)
    return nums[(nums.length) >>> 1]
};

// Boyer-Moore 算法
var majorityElement = function(nums) {
    let result = -1, count = 0
    nums.forEach(num => {
        if (num === result) count++
        else if (--count < 0) {
            result = num
            count = 1
        }
    })
    return result
};