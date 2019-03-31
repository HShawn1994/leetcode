// 题目： 单值二叉树

/**
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
只有给定的树是单值二叉树时，才返回 true；否则返回 false。

示例 1：

输入：[1,1,1,1,1,null,1]
输出：true
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root) return true
    let val = root.val
    let isSame = true
    if (root.left) isSame = val == root.left.val && isUnivalTree(root.left)
    if (root.right) isSame = val == root.right.val && isUnivalTree(root.right) && isSame
    return isSame
};
