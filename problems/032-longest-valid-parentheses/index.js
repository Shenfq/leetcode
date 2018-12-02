/**
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 * 示例 2:
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 *
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = (module.exports = function(s) {
  const stack = []
  let start = 0
  let res = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      if (stack.length > 0) {
        stack.pop()
        if (stack.length > 0) {
          // 表明仅仅匹配完一个区间的括号，还有剩余的括号
          res = Math.max(i - stack[stack.length - 1], res)
        } else {
          // 表明从start到i都是匹配的
          res = Math.max(i - start + 1, res)
        }
      } else {
        // 过滤掉没用的 `)`
        start = i + 1
      }
    }
  }
  return res
})
