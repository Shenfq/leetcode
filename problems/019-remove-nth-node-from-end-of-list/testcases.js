const ListNode = require('../../structures/ListNode')

const l0 = new ListNode(1)
const l1 = l0.next = new ListNode(2)
const l2 = l1.next = new ListNode(3)
const l3 = l2.next = new ListNode(4)
const l4 = l3.next = new ListNode(5)

const _l0 = new ListNode(1)
const _l1 = _l0.next = new ListNode(2)
const _l2 = _l1.next = new ListNode(3)
const _l3 = _l2.next = new ListNode(5)

const __l0 = new ListNode(1)
module.exports = [
    {
      input: [l0, 2],
      output: _l0
    },
    {
      input: [__l0, 1],
      output: null
    }
  ]
