/**
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
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
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 *
 * 示例 3:
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 *
 * 示例 4:
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 *
 * 示例 5:
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (module.exports = function(s, p) {
  const sLen = s.length
  const pLen = p.length
  const One = '?' // 匹配一个字符
  const More = '*' // 匹配多个字符
  let ps = 0 // 字符指针
  let pp = 0 // 匹配符指针
  let match = 0
  let star = -1
  while (ps < sLen) {
    if (pp < pLen && (p[pp] === One || p[pp] === s[ps])) {
      // 字符严格匹配或者匹配符为 ?，两指针同时前移
      ps++
      pp++
    } else if (pp < pLen && p[pp] === More) {
      // 当前匹配符为 *
      star = pp // 记录 * 号位置
      match = ps
      pp++
    } else if (star !== -1) {
      pp = star + 1
      ps = ++match // 如果是 *号，寻找s中与 * 号下个字符一致的字符
    } else {
      return false
    }
  }
  while (pp < pLen && p[pp] === More) {
    pp++
  }
  return pp === pLen
})
