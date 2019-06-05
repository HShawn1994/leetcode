/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/

/**递归
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head
    let node = reverseList(head.next)
    head.next.next = head
    head.next = null
    return node
};

 /**迭代
  * @param {ListNode} head
  * @return {ListNode}
  */
 var reverseList = function(head) {
     let pre = null
     let cur = head
     while (cur) {
         const next = cur.next
         cur.next = pre
         pre = cur
         cur = next
     }
     return pre
 };