/*
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const swap = (nums, i, j) => {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    const helper = (index, nums, res) => {
        if (nums.length === index) {
            res.push(nums.slice())
            return
        }
        for (let i = index; i < nums.length; i++) {
            swap(nums, i, index)
            helper(index + 1, nums, res)
            swap(nums, i, index)
        }
    }
    helper(0, nums, res)
    return res
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [], used = []
    const helper = (cur) => {
        if (nums.length === cur.length) {
            res.push(cur)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            used[i] = true
            cur.push(nums[i])
            helper(cur.slice())
            cur.pop()
            used[i] = false
        }
    }
    helper([])
    return res
};