/*
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) return []
    let stack = [root]
    let res = []
    while (stack.length) {
        let tempLen = stack.slice().length
        let tempArr = []
        for (let i = 0; i < tempLen; i++) {
            let tempNode = stack.shift()
            tempArr.push(tempNode.val)
            if (tempNode.left) {
                stack.push(tempNode.left)
            }
            if (tempNode.right) {
                stack.push(tempNode.right)
            }
        }
        res.push(tempArr)
    }
    return res.reverse()
};
