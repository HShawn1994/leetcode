/*
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) return head
    while (head && head.val === val) {
        head = head.next
    }
    let po = head
    while (po) {
        if (po.next && po.next.val === val) {
            po.next = po.next.next
        } else {
            po = po.next
        }
    }
    return head
};
