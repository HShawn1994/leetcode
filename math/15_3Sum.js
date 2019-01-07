// 题目： 三数之和
/**
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
**/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let result = []
    for (let k = 0; k < nums.length; k++) {
        let i = k + 1
        let j = nums.length - 1
        while (i < j) {
            let temp = nums[i] + nums[j]
            if (temp == -nums[k]) {
                result.push([nums[k], nums[i], nums[j]])
                while (i < j && nums[i] == nums[i + 1]) i++
                while (i < j && nums[j] == nums[j - 1]) j--
                i++
                j--
            } else if (temp > -nums[k]) {
                j--
            } else {
                i++
            }
        }
        while (k < nums.length - 1 && nums[k] == nums[k + 1]) k++
    }
    return result
};
