/*
给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。

示例 1:

输入: [[1,1],[2,2],[3,3]]
输出: 3
解释:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
示例 2:

输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出: 4
解释:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6

*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let result = 0, len = points.length
  if (len < 3) return len
  const gcd = (x, y) => {
      while (y) {
          let temp = x % y
          x = y
          y = temp
      }
      return x
  }
  for (let i = 0; i < len; i++) {
      let dup = 0, max = 0, map = {}
      for (let j = i + 1; j < len; j++) {
          let dx = points[i][0] - points[j][0]
          let dy = points[i][1] - points[j][1]
          if (dx == 0 && dy == 0) {
              dup++
              continue
          }
          const num = gcd(dx, dy)
          dx = dx / num
          dy = dy / num
          const key = dx + '@' + dy
          map[key] = map[key] ? map[key] + 1 : 1
          max = Math.max(max, map[key])
      }
      result = Math.max(result, max + 1 + dup)
  }
  return result
};