/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = (module.exports = function(num1, num2) {
  // 零乘以任何数都是零
  if (num1 === '0' || num2 === '0') return '0'
  const len1 = num1.length
  const len2 = num2.length
  const ret = []

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      ret[i + j] > 0
        ? (ret[i + j] += num1[i] * num2[j])
        : (ret[i + j] = num1[i] * num2[j])
    }
  }
  for (let k = ret.length - 1; k > 0; k--) {
    let curr = ret[k]
    if (curr >= 10) {
      ret[k - 1] += parseInt(curr / 10)
      ret[k] %= 10
    }
  }
  return ret.join('')
})
