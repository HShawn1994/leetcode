/*
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return []
    let res = []
    function preOrder (node, str) {
        if (node.left == null && node.right == null) {
            res.push(str)
        }
        if (node.left != null) preOrder(node.left, `${str}->${node.left.val}`)
        if (node.right != null) preOrder(node.right, `${str}->${node.right.val}`)
    }
    preOrder(root, '' + root.val)
    return res
};
