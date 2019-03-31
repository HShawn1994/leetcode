/*
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function fn (il, ir, pl, pr) {
        if (il > ir) return null
        let root = new TreeNode(postorder[pr])
        let idx = inorder.indexOf(postorder[pr])
        root.left = fn(il, idx - 1, pl, pl + (idx - 1 - il))
        root.right = fn(idx + 1, ir, pl + idx - il, pr - 1)
        return root
    }
    return fn(0, inorder.length - 1, 0, postorder.length - 1)
};
