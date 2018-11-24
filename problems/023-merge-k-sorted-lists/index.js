/**
 * 合并 k 个排序链表，返回合并后的排序链表。
 * 示例:
 * 输入:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
*/
const ListNode = require('../../structures/ListNode')
var mergeKLists = module.exports = function (lists) {
  if (lists.length === 0) return []
  if (lists.length === 1) return lists[0] ? lists[0] : []
  let tmp = []
  for (let node of lists) {
    while (node) {
      tmp.push(node)
      node = node.next
    }
  }
  tmp.sort((a, b) => a.val - b.val)
  const dummy = new ListNode(0)
  let curr = dummy
  for (let node of tmp) {
    curr.next = new ListNode(node.val)
    curr = curr.next
  }

  return dummy.next || []
}

