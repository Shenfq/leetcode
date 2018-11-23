/*
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 **/
const ListNode = require('../../structures/ListNode')
a1 = new ListNode(1)
a2 = a1.next = new ListNode(2)
a3 = a2.next = new ListNode(4)

b1 = new ListNode(1)
b2 = b1.next = new ListNode(3)
b3 = b2.next = new ListNode(4)

c1 = new ListNode(1)
c2 = c1.next = new ListNode(1)
c3 = c2.next = new ListNode(2)
c4 = c3.next = new ListNode(3)
c5 = c4.next = new ListNode(4)
c6 = c5.next = new ListNode(4)
module.exports = [
    {
      input: [a1, b1],
      output: c1
    }
  ]
