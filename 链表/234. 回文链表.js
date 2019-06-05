/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */

var reverseList = function(head) {
  if (!head || !head.next) return head
  const node = reverseList(head.next)
  head.next.next = head
  head.next = null
  return node
};
var isPalindrome = function(head) {
  let fast = head, slow = head
  while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
  }
  let last = slow, half = reverseList(last), prev = head
  while (half) {
      if (half.val == prev.val) {
          half = half.next
          prev = prev.next
      } else {
          return false
      }
  }
  return true
};