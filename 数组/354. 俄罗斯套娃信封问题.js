/*
给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

说明:
不允许旋转信封。

示例:

输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出: 3 
解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  let n = envelopes.length, dp = Array(n).fill(1), result = 0
  if (n < 2) return n
  envelopes.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1]
      return a[0] - b[0]
  })
  for (let i = 1; i < envelopes.length; i++) {
      for (let j = 0; j < i; j++) {
          if (envelopes[i][1] > envelopes[j][1] && envelopes[i][0] > envelopes[j][0]) dp[i] = Math.max(dp[j] + 1, dp[i])
      }
      result = Math.max(result, dp[i])
  }
  return result
};