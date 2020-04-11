/*
给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

示例:

输入: [5,2,6,1]
输出: [2,1,1,0] 
解释:
5 的右侧有 2 个更小的元素 (2 和 1).
2 的右侧仅有 1 个更小的元素 (1).
6 的右侧有 1 个更小的元素 (1).
1 的右侧有 0 个更小的元素.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序
var countSmaller = function(nums) {
  const n = nums.length, result = Array(n).fill(0), indexs = Array(n).fill().map((_, idx) => idx), temp = []
  if (n === 0) return result
  const helper = (left, right) => {
    if (left === right) return
    const mid = (left + right) >>> 1
    helper(left, mid)
    helper(mid + 1, right)
    if (nums[indexs[mid]] <= nums[indexs[mid + 1]]) return
    for (let i = left; i <= right; i++) temp[i] = indexs[i]
    let i = left, j = mid + 1
    for (let k = left; k <= right; k++) {
      if (i > mid) {
        indexs[k] = temp[j++]
      } else if (j > right) {
        indexs[k] = temp[i++]
        result[indexs[k]] += right - mid
      } else if (nums[temp[i]] <= nums[temp[j]]) {
        indexs[k] = temp[i++]
        result[indexs[k]] += j - mid - 1
      } else {
        indexs[k] = temp[j++]
      }
    }
  }
  helper(0, n - 1)
  return result
};

// 线段树
var countSmaller = function(nums) {
  let n = nums.length, result = [], max = Math.max(...nums), min = Math.min(...nums)
  if (n === 0) return result
  n = max - min + 1
  const tree = Array(n).fill(0)
  const lowbit = x => x & (-x)
  const query = x => {
    let result = 0
    while (x > 0) {
      result += tree[x]
      x -= lowbit(x)
    }
    return result
  }
  const update = (x, delta) => {
    while (x < n) {
      tree[x] += delta
      x += lowbit(x)
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = query(nums[i] - min)
    update(nums[i] - min + 1, 1)
  }
  return result
};