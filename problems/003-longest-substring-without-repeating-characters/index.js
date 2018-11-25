/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 无重复字符的最长子串是 "abc"，其长度为 3。
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (module.exports = function(s) {
  const map = {}
  let result = 0
  let start = 0
  let len = s.length
  for (let i = 0; i < len; i++) {
    const str = s[i]
    const index = i + 1
    start = Math.max(start, map[str] || 0)
    result = Math.max(result, index - start)
    map[str] = index
  }

  return result
})
