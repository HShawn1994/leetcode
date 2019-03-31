/*
给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return
    let arr = []
    function pre (node, arr) {
        if (node) {
            arr.push(node)
            pre(node.left, arr)
            pre(node.right, arr)
        }
    }
    let node = root
    pre(node, arr)
    node = arr.shift()
    while (node) {
        node.right = arr.shift()
        node.left = null
        node = node.right
    }
};
