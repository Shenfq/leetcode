/**
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 * 示例 1:
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 * 示例 3:
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 * 示例 4:
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。

 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  /*
  // 作弊式解法。。。
  p = '^' + p + '$'
  return (new RegExp(p, 'g')).test(s)
  */

  const Any = '.'
  const More = '*'
  const helper = (i, j) => {
    // p匹配完，判断s是否匹配完
    if (j === -1) return i === -1
    // s匹配完，判断p当前是否为*
    if (i === -1) {
      if (p[j] !== More) return false
      return helper(i, j - 2)
    }

    if (p[j] === More) {
      if (p[j-1] === Any || p[j-1] === s[i]) {
        if (helper(i - 1, j)) return true
      }
      return helper(i, j - 2)
    }
    if (p[j] === Any || p[j] === s[i]) return helper(i - 1, j - 1)

    return false
  }
  return helper(s.length - 1, p.length - 1)
};

console.log(
  isMatch('aa', 'c*'),
  isMatch('aab', 'c*a*b'),
  isMatch("mississippi", "mis*is*ip*"),
)
