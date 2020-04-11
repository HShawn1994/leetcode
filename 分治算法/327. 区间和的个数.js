/*
给定一个整数数组 nums，返回区间和在 [lower, upper] 之间的个数，包含 lower 和 upper。
区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

说明:
最直观的算法复杂度是 O(n2) ，请在此基础上优化你的算法。

示例:

输入: nums = [-2,5,-1], lower = -2, upper = 2,
输出: 3 
解释: 3个区间分别是: [0,0], [2,2], [0,2]，它们表示的和分别为: -2, -1, 2。

*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const n = nums.length, s = Array(n + 1).fill(0), t = s.slice()
  for (let i = 1; i <= n; i++) s[i] = s[i - 1] + nums[i - 1]
  const merge = (l, r, lo, up) => {
    if (l >= r) return 0
    let cnt = 0, mid = (l + r) >> 1
    cnt += merge(l, mid, lo, up) + merge(mid + 1, r, lo, up)
    let left = l, upp = loo = mid + 1
    while (left <= mid) {
      while (loo <= r && s[loo] - s[left] < lo) loo++ // 不符合时增加去找符合的
      while (upp <= r && s[upp] - s[left] <= up) upp++ //符合时增加去找最后一个符合的位置
      cnt += upp - loo
      left++ 
    }
    left = l
    let pos = l, right = mid + 1
    while (left <= mid || right <= r) {
      if (left > mid) t[pos] = s[right++]
      if (right > r && left <= mid) t[pos] = s[left++]
      if (left <= mid && right <= r) {
        if (s[left] <= s[right]) t[pos] = s[left++]
        else t[pos] = s[right++]
      } 
      pos++
    }
    for (let i = l; i <= r; i++) s[i] = t[i]
    return cnt
  }
  return merge(0, n, lower, upper)
};