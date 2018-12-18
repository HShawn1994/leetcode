// 题目： 两数之和

/** 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 **/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //暴力法
var twoSum0 = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) return [i, k]
        }
    }
};
// 一遍哈希表
var twoSum1 = function(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let temp = obj[target - nums[i]]
        if (temp != null) { 
            return [temp, i]
        }
        obj[nums[i]] = i
    }
};
