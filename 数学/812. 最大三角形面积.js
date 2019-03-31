/*
给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

示例:
输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出: 2
解释: 
这五个点如下图所示。组成的橙色三角形是最大的，面积为2。


注意:

3 <= points.length <= 50.
不存在重复的点。
 -50 <= points[i][j] <= 50.
结果误差值在 10^-6 以内都认为是正确答案。
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let area = 0.0
    for (let i = 0; i < points.length; i++) {
        let a = points[i]
        for (let j = 0; j < points.length; j++) {
            let b = points[j]
            for (let k = 0; k < points.length; k++) {
                let c = points[k]
                area = Math.max(area, (a[0] * b[1] + b[0] * c[1] + c[0] * a[1] - a[0] * c[1] - b[0] * a[1] - b[1] * c[0]) / 2)
            }
        }
    }
    return area
};
