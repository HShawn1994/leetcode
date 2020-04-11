/*
给定一个整数 n, 返回从 1 到 n 的字典顺序。

例如，

给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。

请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
*/
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  return Array(n).fill().map((_, idx) => idx + 1).sort()
};

// 递归
var lexicalOrder = function(n) {
  const result = []
  const helper = (num) => {
    if (num > n) return
    result.push(num)
    num *= 10
    for (let i = 0; i < 10; i++) {
      helper(num + i)
    }
  }
  for (let i = 1; i < 10; i++) helper(i)
  return result
};