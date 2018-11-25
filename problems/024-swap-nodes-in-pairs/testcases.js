const ListNode = require('../../structures/ListNode')
module.exports = [
  {
    input: [ListNode.generate([1, 2, 3, 4, 6])],
    output: ListNode.generate([2, 1, 4, 3, 6])
  },
  {
    input: [ListNode.generate([1, 2, 3, 4])],
    output: ListNode.generate([2, 1, 4, 3])
  }
]
