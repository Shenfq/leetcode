/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 *
 * 示例 2:
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = (module.exports = function(dividend, divisor) {
  if (dividend === 0) return 0
  let step = 1
  if (dividend > 0 && divisor < 0) {
    divisor = -divisor
    step = -1
  } else if (dividend < 0 && divisor > 0) {
    dividend = -dividend
    step = -1
  } else if (dividend < 0 && divisor < 0) {
    divisor = -divisor
    dividend = -dividend
  }
  let sum = divisor
  let idx = step
  let prevIdx = idx
  let prevSum = sum
  while (sum <= dividend) {
    prevIdx = idx
    prevSum = sum
    sum += sum
    idx += idx
  }
  idx -= prevIdx
  sum -= prevSum
  while (sum <= dividend) {
    sum += divisor
    idx += step
  }
  idx -= step

  if (idx > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  }
  if (idx < -(2 ** 31)) {
    return -(2 ** 31)
  }

  return idx
})
