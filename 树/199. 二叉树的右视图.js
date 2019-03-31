/*
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let quene = [root]
    let res = []
    while (quene.length) {
        let arr = quene.splice(0)
        res.push(arr[arr.length - 1].val)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].left) quene.push(arr[i].left)
            if (arr[i].right) quene.push(arr[i].right)
        }
    }
    return res
};
