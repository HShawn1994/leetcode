/*
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const nums = [1], used = []
  for (let i = 1; i <= n; i++) {
      nums[i] = i * nums[i - 1]
  }
  let result = ''
  const dfs = idx => {
      if (idx === n) return
      const cnt = nums[n - idx - 1]
      for (let i = 1; i <= n; i++) {
          if (used[i]) continue
          if (k > cnt) {
              k -= cnt
              continue
          }
          used[i] = true
          result += i
          dfs(idx + 1)
      }
  }
  dfs(0)
  return result
};