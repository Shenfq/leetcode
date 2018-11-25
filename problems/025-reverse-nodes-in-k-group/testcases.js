const ListNode = require('../../structures/ListNode')
module.exports = [
  {
    input: [ListNode.generate([1, 2, 3, 4, 6]), 3],
    output: ListNode.generate([3, 2, 1, 4, 6])
  },
  {
    input: [ListNode.generate([1, 2, 3, 4, 5]), 3],
    output: ListNode.generate([3, 2, 1, 4, 5])
  },
  {
    input: [ListNode.generate([]), 1],
    output: null
  }
]
