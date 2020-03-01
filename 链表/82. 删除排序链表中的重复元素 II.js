/*
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3

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
 * @return {ListNode}
 */


var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let next = head.next
  if (head.val === next.val) {
      while(next && head.val === next.val) next = next.next
      head = deleteDuplicates(next)
  } else {
      head.next = deleteDuplicates(next)
  }
  return head
};