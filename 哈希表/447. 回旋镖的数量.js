/*
给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例:

输入:
[[0,0],[1,0],[2,0]]
输出:
2

解释:
两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const getDist = (a, b) => {
      const [x1, y1] = a
      const [x2, y2] = b
      return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
  }
  const map = new Map()
  let res = 0
  for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points.length; j++) {
          if (i === j) continue
          const dist = getDist(points[i], points[j])
          const val = map.get(dist)
          if (val) {
              map.set(dist, val + 1)
              res += 2 * val
          } else {
              map.set(dist, 1)
          }
      }
      map.clear()
  }
  return res
};
