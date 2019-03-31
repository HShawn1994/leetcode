/*
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    function fn (low, hei) {
        if (low > hei) return null
        let mid = Math.floor((low + hei) / 2)
        let val = arr[mid]
        let root = new TreeNode(val)
        root.left = fn(low, mid - 1)
        root.right = fn(mid + 1, hei)
        return root
    }
    return fn(0, arr.length - 1)
};
