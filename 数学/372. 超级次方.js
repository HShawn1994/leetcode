/*
你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。
示例 1:

输入: a = 2, b = [3]
输出: 8
示例 2:

输入: a = 2, b = [1,0]
输出: 1024
*/
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  const base = 1337
  const myPow = (num, k) => {
    num %= base
    let result = 1
    for (let i = 0; i < k; i++) {
      result *= num
      result %= base
    }
    return result
  }
  if (!b.length) return 1
  return (myPow(a, b.pop()) * myPow(superPow(a, b), 10)) % base
};
// 高效幂运算
var superPow = function(a, b) {
  const base = 1337
  const myPow = (num, k) => {
    if (k == 0) return 1
    num %= base
    if (k & 1) return num * myPow(num, k - 1) % base
    const sub = myPow(num, ~~(k / 2))
    return (sub * sub) % base
  }
  if (!b.length) return 1
  return (myPow(a, b.pop()) * myPow(superPow(a, b), 10)) % base
};