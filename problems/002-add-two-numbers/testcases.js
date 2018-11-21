const ListNode = require('../../structures/ListNode')

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const l3 = new ListNode(7)
l3.next = new ListNode(0)
l3.next.next = new ListNode(8)

module.exports = [
  {
    input:  [l1, l2],
    output: l3
  }
]
