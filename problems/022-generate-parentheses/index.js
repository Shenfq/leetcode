/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = module.exports = function(n) {
  function append (str, left, right) {
    if (left === n && right === n) {
      ret.push(str)
    }
    else {
      if (left < n) {
        append(str + '(', left + 1, right)
      }
      if (right < left) {
        append(str + ')', left, right + 1)
      }
    }
  }
  if (n === 0) return []
  if (n === 1) return ['()']
  let ret = []
  append('', 0, 0)
  return ret
}
