/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
 *
 * 示例 2:
 * 输入: -123
 * 输出: -321
 *
 * @param {number} x
 * @return {number}
 */
var reverse = (module.exports = function(x) {
  if (x === 0) {
    return 0
  }
  const numStr = Math.abs(x).toString()
  let i = numStr.length - 1
  let result = ''

  for (; i >= 0; i--) {
    result += numStr[i]
    if (result === '0') {
      result = ''
    }
  }

  result = x < 0 ? '-' + result : result
  result = parseInt(result)
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0
  }
  return result
})
