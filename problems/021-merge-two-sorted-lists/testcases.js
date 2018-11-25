/*
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 **/
const ListNode = require('../../structures/ListNode')

module.exports = [
  {
    input: [ListNode.generate([1, 2, 4]), ListNode.generate([1, 3, 4])],
    output: ListNode.generate([1, 1, 2, 3, 4, 4])
  }
]
