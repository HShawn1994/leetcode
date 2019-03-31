/*
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1
 

示例 2:

输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7
 

注意: 您可以假设树（即给定的根节点）不为 NULL。
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
var findBottomLeftValue = function(root) {
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
    return res[res.length - 1][0]
};
