/*

编写一个程序，找出第 n 个丑数。
丑数就是只包含质因数 2, 3, 5 的正整数。

示例:
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let nums = [1], i2 = i3 = i5 = 0, i = 1
  while (i < n) {
      const ugly = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5)
      nums[i++] = ugly
      if (ugly === nums[i2] * 2) i2++
      if (ugly === nums[i3] * 3) i3++
      if (ugly === nums[i5] * 5) i5++
  }
  return nums[n - 1]
};