/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = (module.exports = function(root) {
  if (!root) return []
  let result = []
  function traversal(node) {
    node.left && traversal(node.left)
    result.push(node.val)
    node.right && traversal(node.right)
  }
  traversal(root)
  return result
})

/**
 * 通过遍历实现
var inorderTraversal = function () {
  if (!root) return []
  let res = []
  let head = []
  let node = root
  while (head.length || node) {
    if (node) {
      head.push(node)
      node = node.left
    } else {
      node = head.pop()
      res.push(node.val)
      node = node.right
    }
  }
  return res
}
*/
