/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 * 说明：
 * 给定的 n 保证是有效的。
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const ListNode = require('../../structures/ListNode')
var removeNthFromEnd = module.exports = function(head, n) {
  let dummy = new ListNode(0)
  dummy.next = head
  // 创建快慢指针
  let fast = dummy
  let slow = dummy

  // 先将快指针向前移动n个节点
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  // 同时移动快慢指针，直到快指针到达末尾
  // 此时慢指针与快指针保持的距离为n
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
