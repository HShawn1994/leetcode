/*
有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
示例 1: (From the famous "Die Hard" example)

输入: x = 3, y = 5, z = 4
输出: True
示例 2:

输入: x = 2, y = 6, z = 5
输出: False
*/
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
// 深度优先遍历
var canMeasureWater = function(x, y, z) {
  if (z == 0) return true
  if (x + y < z) return false
  let init = [0, 0], quene = [init], seen = new Set()
  seen.add(init.join(','))
  const getStates = (x1, y1) => {
    const result = []
    // 加水使得A满
    x1 < x && result.push([x, y1])
    // 加水使得B满
    y1 < y && result.push([x1, y])
    // 清空A
    x1 > 0 && result.push([0, y1])
    // 清空B
    y1 > 0 && result.push([x1, 0])
    // A => B, B满A有剩
    x1 - (y - y1) > 0 && result.push([x1 - (y - y1), y])
    // B => A, A满B有剩
    y1 - (x - x1) > 0 && result.push([x, y1 - (x - x1)])
    // A => B, A空B未满
    x1 + y1 < y && result.push([0, x1 + y1])
    // B => A, B空A未满
    x1 + y1 < x && result.push([x1 + y1, 0])
    return result
  }
  while (quene.length) {
    const [x1, y1] = quene.shift()
    if (x1 == z || y1 == z || x1 + y1 == z) return true
    const nextStates = getStates(x1, y1)
    for (let i = 0; i < nextStates.length; i++) {
      if (!seen.has(nextStates[i].join(','))) {
        quene.push(nextStates[i])
        seen.add(nextStates[i].join(','))
      }
    }
  }
  return false
};

// 贝祖定理
var canMeasureWater = function(x, y, z) {
  if (x + y < z) return false
  if (x + y == z || z == 0) return true
  const gcd = (a, b) => {
    let t = 0
    while (b) {
      t = b
      b = a % b
      a = t
    }
    return a
  }
  return z % gcd(x, y) == 0
};