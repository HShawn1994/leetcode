/*
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
示例：

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
进阶:

如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
*/

// 二分法
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.arr = []
};

/** 
* @param {number} num
* @return {void}
*/

MedianFinder.prototype.addNum = function(num) {
  if (!this.arr.length) {
      this.arr.push(num)
      return
  }
  let l = 0, r = this.arr.length - 1
  while (l <= r) {
      const mid = (l + r) >>> 1
      if (this.arr[mid] === num) {
          this.arr.splice(mid, 0, num)
          return
      } else if (num > this.arr[mid]) l = mid + 1
      else r = mid - 1
  }
  this.arr.splice(r + 1, 0, num)
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  const len = this.arr.length
  if (len & 1) {
      return this.arr[len >>> 1]
  } else {
      return (this.arr[len >>> 1] + this.arr[(len >>> 1) - 1]) * 0.5
  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

// 最大堆+最小堆
const defaultCmp = (x, y) => x > y
const swap = (arr, x, y) => { [arr[x], arr[y]] = [arr[y], arr[x]] }
class Heap {

  constructor(cmp = defaultCmp) {
    this.cmp = cmp
    this.data = []
  }
  
  insert (num) {
    const { data, cmp } = this
    data.push(num)
    let idx = data.length - 1
    while (idx > 0) {
      let parent = (idx - 1) >>> 1
      if (!cmp(data[idx], data[parent])) return
      swap(data, idx, parent)
      idx = parent
    }
  }

  extract () {
    const { data, cmp } = this
    if (!data.length) return null
    const len = data.length - 1
    swap(data, 0, len)
    const res = data.pop()
    let idx = 0, exchange = 1
    while (exchange < len) {
      let right = 2 * idx + 2
      if (right < len && cmp(data[right], data[exchange])) exchange = right
      if (!cmp(data[exchange], data[idx])) break
      swap(data, exchange, idx)
      idx = exchange
      exchange = idx * 2 + 1
    }
    return res
  }

  top () {
    if (!this.data.length) return null
    return this.data[0]
  }
}
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.maxHeap = new Heap()
  this.minHeap = new Heap((x, y) => y > x)
};

/** 
* @param {number} num
* @return {void}
*/

MedianFinder.prototype.addNum = function(num) {
  this.maxHeap.insert(num)
  this.minHeap.insert(this.maxHeap.extract())
  if (this.maxHeap.data.length < this.minHeap.data.length) {
    this.maxHeap.insert(this.minHeap.extract())
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  return this.maxHeap.data.length > this.minHeap.data.length
         ? this.maxHeap.top()
         : (this.maxHeap.top() + this.minHeap.top()) / 2
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/