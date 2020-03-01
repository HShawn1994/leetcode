/*
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head) return head
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy, delta = n - m, tail = head
  while (m-- > 1) {
      prev = tail
      tail = tail.next
  }
  while (delta-- > 0) {
      const next = tail.next
      tail.next = next.next;//tail一直不变，只要修改指针到next.next
      next.next = prev.next;//next.next指向pre的next，也就是最新的第m个位置
      prev.next = next;//更新next为最新的第m个位置
  }
  return dummy.next
};