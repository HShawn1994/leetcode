/*
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    let newH = null
    if (l1.val < l2.val) {
        newH = l1
        newH.next = mergeTwoLists(l1.next, l2)
    } else {
        newH = l2
        newH.next = mergeTwoLists(l1, l2.next)
    }
    return newH
};
