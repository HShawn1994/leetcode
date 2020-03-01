/*
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1:

输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
输出: [[1,5],[6,9]]
示例 2:

输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出: [[1,2],[3,10],[12,16]]
解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = [], i = 0, len = intervals.length
  while(i < len && intervals[i][0] < newInterval[0]) {
      result.push(intervals[i++])
  }
  if (!result.length || result[result.length - 1][1] < newInterval[0]) {
      result.push(newInterval)
  } else {
      result[result.length - 1][1] = Math.max(newInterval[1], result[result.length - 1][1])
  }
  for (let j = i; j < len; j++) {
      const last = result[result.length - 1]
      if (intervals[j][0] > last[1]) {
          result.push(intervals[j])
      } else {
          last[1] = Math.max(last[1], intervals[j][1])
      }
  }
  return result
};