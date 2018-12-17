// 题目： 两数相加

/**给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。**/


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
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let node = new ListNode(0)
    let head = node
    let p1 = l1
    let p2 = l2
    while (p1 || p2) {
        let x = p1 ? p1.val : 0
        let y = p2 ? p2.val : 0
        let sum = x + y + carry
        carry = parseInt(sum / 10)
        node.next = new ListNode(sum % 10)
        node = node.next
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }
    if (carry === 1) node.next = new ListNode(1)
    return head.next
}
