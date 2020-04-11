/*
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。

示例:

Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
说明:

数组仅可以在 update 函数下进行修改。
你可以假设 update 函数与 sumRange 函数的调用次数是均匀分布的。
*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  const n = nums.length
  if (!n) return
  const tree = Array(2 * n).fill(0)
  for (let i = n, j = 0; i < 2 * n; i++, j++) tree[i] = nums[j]
  for (let i = n - 1; i > 0; i--) tree[i] = tree[2 * i] + tree[2 * i + 1]
  this.tree = tree
  this.n = n
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  i += this.n
  this.tree[i] = val
  while (i > 0) {
    let l = r = i
    if (i & 1) l = i - 1
    else r = i + 1
    this.tree[i >>> 1] = this.tree[l] + this.tree[r]
    i >>= 1
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let l = this.n + i,r = this.n + j, sum = 0
  while(l <= r) {
    if (l & 1) sum += this.tree[l++]
    if (!(r & 1)) sum += this.tree[r--]
    l >>= 1
    r >>= 1
  }
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */