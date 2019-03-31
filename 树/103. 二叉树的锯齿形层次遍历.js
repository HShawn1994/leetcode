/*
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：

[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    let flag = true
    while (stack.length) {
        let arr = stack.splice(0)
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            if (flag) temp.push(arr[i].val)
            else temp.unshift(arr[i].val)
            if (arr[i].left) stack.push(arr[i].left)
            if (arr[i].right) stack.push(arr[i].right)
        }
        res.push(temp)
        flag = !flag
    }
    return res
};
