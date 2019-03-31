/*
给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

案例 1:

输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

输出: True
 

案例 2:

输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

输出: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root == null) return false
    let vals = {}
    let stack = [root]
    while (stack.length > 0) {
        let node = stack.pop()
        vals[node.val] = vals[node.val] ? vals[node.val] + 1 : 1
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return Object.keys(vals).some(i => vals[k - i] && (k != 2 * i))
};
