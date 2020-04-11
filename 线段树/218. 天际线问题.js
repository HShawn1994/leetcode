/*
城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。现在，假设您获得了城市风光照片（图A）上显示的所有建筑物的位置和高度，请编写一个程序以输出由这些建筑物形成的天际线（图B）。

每个建筑物的几何信息用三元组 [Li，Ri，Hi] 表示，其中 Li 和 Ri 分别是第 i 座建筑物左右边缘的 x 坐标，Hi 是其高度。可以保证 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX 和 Ri - Li > 0。您可以假设所有建筑物都是在绝对平坦且高度为 0 的表面上的完美矩形。

例如，图A中所有建筑物的尺寸记录为：[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] 。

输出是以 [ [x1,y1], [x2, y2], [x3, y3], ... ] 格式的“关键点”（图B中的红点）的列表，它们唯一地定义了天际线。关键点是水平线段的左端点。请注意，最右侧建筑物的最后一个关键点仅用于标记天际线的终点，并始终为零高度。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。

例如，图B中的天际线应该表示为：[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]。

说明:

任何输入列表中的建筑物数量保证在 [0, 10000] 范围内。
输入列表已经按左 x 坐标 Li  进行升序排列。
输出列表必须按 x 位排序。
输出天际线中不得有连续的相同高度的水平线。例如 [...[2 3], [4 5], [7 5], [11 5], [12 7]...] 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：[...[2 3], [4 5], [12 7], ...]

*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// 线段树分治法
var getSkyline = function(buildings) {
  if (!buildings.length) return []
  const merge = (start, end) => {
      const result = []
      if (start === end) {
          const xyh = buildings[start]
          return [[xyh[0], xyh[2]], [xyh[1], 0]]
      }
      const mid = (start + end) >>> 1
      const left = merge(start, mid), right = merge(mid + 1, end)
      let h1 = h2 = i = j = 0
      while (i < left.length || j < right.length) {
          let x = 0, x1 = i < left.length ? left[i][0] : Infinity, x2 = j < right.length ? right[j][0] : Infinity
          if (x1 > x2) {
              x = x2
              h2 = right[j++][1]
          } else if (x1 < x2) {
              x = x1
              h1 = left[i++][1]
          } else {
              x = x1
              h1 = left[i++][1]
              h2 = right[j++][1]
          }
          let h = Math.max(h1, h2)
          if (!result.length || h !== result[result.length - 1][1]) {
              result.push([x, h])
          }
      }
      return result
  }
  return merge(0, buildings.length - 1)
};

// 扫描法
var getSkyline = function(buildings) {
  if (!buildings.length) return []
  let result = [], map = {'0': 1}, preMax = 0, p = []
  buildings.forEach(item => {
      const [x, y, h] = item
      p.push([x, -h], [y, h])
  })
  const sort = (x, y) => {
      const [x1, y1] = x, [x2, y2] = y
      if (x1 !== x2) return x1 - x2
      return y1 - y2
  }
  p.sort(sort)
  p.forEach(item => {
      let [x, y] = item
      if (y < 0) map[-y] = map[-y] ? map[-y] + 1 : 1
      else map[y] === 1 ? delete map[y] : map[y]--
      const max = Object.keys(map).map(Number).sort((a, b) => b - a)[0]
      if (max !== preMax) {
          result.push([x, max])
          preMax = max
      }
  })
  return result
};