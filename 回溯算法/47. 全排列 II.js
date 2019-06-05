/*
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [], used = []
    nums.sort()
    const helper = (cur) => {
        if (cur.length === nums.length) {
            res.push(cur)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
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