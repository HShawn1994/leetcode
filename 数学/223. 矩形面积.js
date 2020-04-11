/*
在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。

每个矩形由其左下顶点和右上顶点坐标表示，如图所示。

示例:

输入: -3, 0, 3, 4, 0, -1, 9, 2
输出: 45
说明: 假设矩形面积不会超出 int 的范围。
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  const area1 = (C - A) * (D - B), area2 = (G - E) * (H - F)
  if (E >= C || B >= H || A >= G || F >= D) return area1 + area2
  const topX = Math.min(G, C), topY = Math.min(D, H), bottomX = Math.max(A, E), bottomY = Math.max(B, F)
  const area3 = (topX - bottomX) * (topY - bottomY)
  return area1 + area2 - area3
};