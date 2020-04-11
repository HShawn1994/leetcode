/*
给定一个非负整数的数据流输入 a1，a2，…，an，…，将到目前为止看到的数字总结为不相交的区间列表。

例如，假设数据流中的整数为 1，3，7，2，6，…，每次的总结为：

[1, 1]
[1, 1], [3, 3]
[1, 1], [3, 3], [7, 7]
[1, 3], [7, 7]
[1, 3], [6, 7]
 

进阶：
如果有很多合并，并且与数据流的大小相比，不相交区间的数量很小，该怎么办?
*/
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
  this.nums = new Set()
};

/** 
* @param {number} val
* @return {void}
*/
SummaryRanges.prototype.addNum = function(val) {
  this.nums.add(val)
};

/**
* @return {number[][]}
*/
SummaryRanges.prototype.getIntervals = function() {
  const nums = [...this.nums].sort((a, b) => a - b)
  let i = 0, j = nums.length - 1, result = []
  while (i <= j) {
      let first = nums[i]
      while (i <= j && this.nums.has(nums[i] + 1)) { i++ }
      result.push([first, nums[i++]]) 
  }
  return result
};

/**
* Your SummaryRanges object will be instantiated and called as such:
* var obj = new SummaryRanges()
* obj.addNum(val)
* var param_2 = obj.getIntervals()
*/