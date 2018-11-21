/**
 *
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require('../../structures/ListNode')
var addTwoNumbers = module.exports = function (l1, l2) {
  var head = new ListNode(0),
    point = head,
    remain = 0,
    node1 = l1, node2 = l2

  while (node1 || node2 || remain > 0) {
    var num1 = node1 ? node1.val : 0,
      num2 = node2 ? node2.val : 0,
      num = num1 + num2 + remain,
      flow = 0

    if (num > 9) {
      num = num % 10
      flow = 1
    }

    point.next = new ListNode(num)
    point = point.next

    node1 = node1 && node1.next
    node2 = node2 && node2.next
    remain = flow
  }

  return head.next
}
