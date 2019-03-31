/*
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
    if (root === null) return []
    let quene = [root]
    let res = []
    while (quene.length) {
        let len = quene.length
        let temp = []
        for (let i = 0; i < len; i++) {
            let node = quene.pop()
            temp.push(node.val)
            if (node.left) quene.unshift(node.left)
            if (node.right) quene.unshift(node.right)
        }
        res.push(temp)
    }
    return res
};
