/*
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

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
var sortList = function(head) {
  let node = head, len = 0, step = 1
  while (node) {
      len++
      node = node.next
  }
  const cut = (left, step) => {
      if (!left) return null
      let i = 1
      while (i < step && left.next) {
          left = left.next
          i++
      }
      const right = left.next
      left.next = null
      return right
  }
  const merge = (l1, l2) => {
      let dummy = new ListNode(0), head = dummy
      while (l1 && l2) {
          if (l1.val > l2.val) {
              head.next = l2
              l2 = l2.next
          } else {
              head.next = l1
              l1 = l1.next
          }
          head = head.next
      }
      head.next = !l1 ? l2 : l1
      return dummy.next
  }
  const dummy = new ListNode(0)
  dummy.next = head
  while(len > step) {
      let prev = dummy, curr = dummy.next
      while (curr) {
          const left = curr, right = cut(left, step)
          curr = cut(right, step)
          prev.next = merge(left, right)
          while (prev.next) prev = prev.next
      }
      step <<= 1
  }
  return dummy.next
};