/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 * 示例 2:
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 * 示例 3:
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 *
 * 说明:
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = (module.exports = function(x, n) {
  let ret = 1
  let isMinus = n < 0
  while (n !== 0) {
    // 如果n为奇数
    if (n % 2) {
      ret *= x
    }
    x *= x
    n = parseInt(n / 2)
  }
  return isMinus ? 1 / ret : ret
})
