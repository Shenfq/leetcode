const ListNode = require('../../structures/ListNode')
module.exports = [
  {
    input: [
      [
        ListNode.generate([1, 4, 5]),
        ListNode.generate([1, 3, 4]),
        ListNode.generate([2, 6])
      ]
    ],
    output: ListNode.generate([1, 1, 2, 3, 4, 4, 5, 6])
  },
  {
    input: [[]],
    output: []
  }
]
