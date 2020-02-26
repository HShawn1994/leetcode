/*
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例 :

给定这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5

说明 :

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
 * @param {number} k
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

var reverseKGroup = function(head, k) {
 const dummy = new ListNode(0)
 dummy.next = head
 let prev = dummy, next = dummy
 while(next.next) {
     for (let i = 0; i < k && next; i++) {
         next = next.next
     }
     if (!next) break
     const start = prev.next
     const newNext = next.next
     next.next = null
     prev.next = reverseList(start)
     start.next = newNext
     prev = start
     next = prev
 }
 return dummy.next
};
