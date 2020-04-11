/*
给出一个完全二叉树，求出该树的节点个数。

说明：

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

示例:

输入: 
    1
   / \
  2   3
 / \  /
4  5 6

输出: 6
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
 * @return {number}
 */
// 线性递归
var countNodes = function(root) {
  if (!root) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
};
//二分法
var countNodes = function(root) {
  if (!root) return 0
  let h = 0, node = root
  while (node.left) {
    node = node.left
    h++
  }
  if (h === 0) return 1
  const exist = idx => {
    let node = root, left = 0, right = Math.pow(2, h) - 1
    for (i = 0; i < h; i++) {
      let mid = (left + right) >>> 1
      if (idx <= mid) {
        node = node.left
        right = mid
      } else {
        node = node.right
        left = mid + 1
      }
    }
    return !!node
  }
  let left = 0, right = Math.pow(2, h) - 1
  while(left <= right) {
    let mid = (left + right) >>> 1
    if (exist(mid)) left = mid + 1
    else right = mid - 1
  }
  return Math.pow(2, h) - 1 + left
};

