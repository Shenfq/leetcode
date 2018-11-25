/**
 * 将两个有序链表合并为一个新的有序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require('../../structures/ListNode')
var mergeTwoLists = (module.exports = function(l1, l2) {
  if (!l1 && !l2) return []
  if (!l1) return l2
  if (!l2) return l1
  const dummy = new ListNode(0)
  let curr = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  curr.next = l1 || l2
  return dummy.next
})
