/*
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

示例:

输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const dp = [[]]
  if (n === 0) return dp[0]
  dp[0].push(null)
  const clone = (node, offest) => {
      if (!node) return null
      const newNode = new TreeNode(node.val + offest)
      newNode.left = clone(node.left, offest)
      newNode.right = clone(node.right, offest)
      return newNode
  }
  for (let len = 1; len <= n ;len++) {
      dp[len] = []
      for (let root = 1; root <= len; root++) {
          const left = root - 1, right = len - root
          for (let leftIdx = 0; leftIdx < dp[left].length; leftIdx++) {
              const leftNode = dp[left][leftIdx]
              for (let rightIdx = 0; rightIdx < dp[right].length; rightIdx++) {
                  const rightNode = dp[right][rightIdx]
                  const rootNode = new TreeNode(root)
                  rootNode.left = leftNode
                  rootNode.right = clone(rightNode, root)
                  dp[len].push(rootNode)
              }
          }
      }
  }
  return dp[n]
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return []
  const dfs = (start, end) => {
      if (start > end) return [null]
      if (start === end) return [new TreeNode(start)]
      const arr = []
      for (let i = start; i <= end; i++) {
          const leftNodes = dfs(start, i - 1)
          const rightNodes = dfs(i + 1, end)
          leftNodes.forEach(left => {
              rightNodes.forEach(right => {
                  const root = new TreeNode(i)
                  root.left = left
                  root.right = right
                  arr.push(root)
              })
          })
      }
      return arr
  }
  return dfs(1, n)
};