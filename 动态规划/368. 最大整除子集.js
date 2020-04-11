/*
给出一个由无重复的正整数组成的集合，找出其中最大的整除子集，子集中任意一对 (Si，Sj) 都要满足：Si % Sj = 0 或 Sj % Si = 0。
如果有多个目标子集，返回其中任何一个均可。

 

示例 1:

输入: [1,2,3]
输出: [1,2] (当然, [1,3] 也正确)
示例 2:

输入: [1,2,4,8]
输出: [1,2,4,8]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  let n = nums.length, result = [], arrs = Array(n).fill().map(_ => [])
  if (!n) return result
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let maxSubset = []
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] == 0 && maxSubset.length < arrs[j].length) maxSubset = arrs[j]
    }
    arrs[i].push(...maxSubset, nums[i])
    if (arrs[i].length > result.length) result = arrs[i]
  }
  return result
};
