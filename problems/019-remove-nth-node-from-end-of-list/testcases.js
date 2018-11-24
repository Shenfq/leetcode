const ListNode = require('../../structures/ListNode')

module.exports = [
    {
      input: [
        ListNode.generate([1, 2, 3, 4, 5]), 2
      ],
      output: ListNode.generate([1, 2, 3, 5])
    },
    {
      input: [ListNode.generate([1]), 1],
      output: null
    }
  ]
