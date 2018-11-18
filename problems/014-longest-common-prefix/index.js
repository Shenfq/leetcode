/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  // 排序之后只要比较第一个字符串和最后一个就能找到公共前缀
  strs.sort()
  const firstStr = strs[0]
  const lastStr = strs[strs.length - 1]
  const length = firstStr.length
  let res = ''

  for (let i = 0; i < length; i++) {
    if (firstStr[i] == lastStr[i]) {
      res += firstStr[i]
    } else {
      break
    }
  }
  return res
};
