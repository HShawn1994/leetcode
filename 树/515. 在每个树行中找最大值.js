/*
您需要在二叉树的每一行中找到最大的值。

示例：

输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9]
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
var largestValues = function(root) {
    if (!root) return []
    let quene = [root]
    let res = []
    while (quene.length) {
        let len = quene.length
        let arr = quene.splice(0, len)
        res.push(Math.max.apply(null, arr.map(i => i.val)))
        for (let i = 0; i < len; i++) {
            let node = arr.shift()
            if (node.left) quene.push(node.left)
            if (node.right) quene.push(node.right)
        }
    }
    return res
};
