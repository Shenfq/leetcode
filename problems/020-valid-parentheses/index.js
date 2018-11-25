/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例:
 * 输入: "()[]{}"
 * 输出: true
 *
 * 示例:
 * 输入: "([)]"
 * 输出: false
 *
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = (module.exports = function(s) {
  if (s === '') return true
  const lookup = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []

  for (let char of s) {
    if (lookup[char]) {
      stack.push(char)
    } else {
      if (char !== lookup[stack.pop()]) {
        return false
      }
    }
  }

  return stack.length === 0
})
