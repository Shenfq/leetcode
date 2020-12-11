const TreeNode = require('../../structures/TreeNode')

module.exports = [
  {
    input: [null],
    output: []
  },
  {
    input: [new TreeNode(1, new TreeNode(2))],
    output: [2, 1]
  },
  {
    input: [new TreeNode(1, null, new TreeNode(2))],
    output: [1, 2]
  },
  {
    input: [new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))],
    output: [1, 3, 2]
  }
]
