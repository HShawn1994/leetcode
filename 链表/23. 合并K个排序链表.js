/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
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

var mergeKLists = function(lists) {
  if (!lists.length) return null
  let i = 1, len = lists.length
  while (i < len) {
      for (let j = 0; j < len - i; j += 2 * i) {
          lists[j] = mergeTwoLists(lists[j], lists[j + i])
      }
      i *= 2
  }
  return lists[0]
};