/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。当 needle 是空字符串时我们应当返回 0 。
 *
 * 示例 1:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 * 示例 2:
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = (module.exports = function(haystack, needle) {
  const len = needle.length
  if (len === 0) return 0
  for (let i = 0, stackLen = haystack.length; i < stackLen; i++) {
    if (stackLen - i < len) {
      return -1
    }
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + len) === needle) {
        return i
      }
    }
  }
  return -1
})
