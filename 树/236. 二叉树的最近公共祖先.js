/*
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 
说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


// 中序迭代遍历
var lowestCommonAncestor = function(root, p, q) {
  if (root == p || root == q || root == null) return root
  let stack = [], node = root.left, pFound = qFound = false
  while (node || stack.length) {
      while (node) {
          stack.push(node)
          node = node.left
      }
      node = stack.pop()
      if (node === p) pFound = true
      if (node === q) qFound = true
      if (pFound && qFound) break
      node = node.right
  }
  if (pFound && qFound) return lowestCommonAncestor(root.left, p, q)
  else if (!pFound && !qFound) return lowestCommonAncestor(root.right, p, q)
  return root
}

// 递归
var lowestCommonAncestor = function(root, p, q) {
  if (root == p || root == q || root == null) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left === null) return right
  if (right === null) return left
  return root
}

// 倒序遍历
var lowestCommonAncestor = function(root, p, q) {
  if (root == p || root == q || root == null) return root
  const stack = [root], parent = new Map()
  parent.set(root, null)
  while (!parent.has(p) || !parent.has(q)) {
    let node = stack.pop()
    if (node.left) {
      stack.push(node.left)
      parent.set(node.left, node)
    }
    if (node.right) {
      stack.push(node.right)
      parent.set(node.right, node)
    }
  }
  const path = new Set()
  while (p) {
    path.add(p)
    p = parent.get(p)
  }
  while (q) {
    if (path.has(q)) break
    q = parent.get(q)
  }
  return q
}
