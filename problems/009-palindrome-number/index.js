/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 * 输入: 121
 * 输出: true
 *
 * 示例 2:
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 示例 3:
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = module.exports =function(x) {
  // 方法一：转成字符串，判断翻转后是否相等
  /*
  if (x < 0) {
    return false
  }
  const str = x.toString()
  if (str === str.split('').reverse().join('')) {
    return true
  }
  return false
  */
  // 方法二：不转成字符串，通过每次取余数的方式翻转数字
  // 小于0或者能被10整除的数肯定不是回文数
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let reverse = 0
  /*
  let _x = x
  while (_x > 0) {
    reverse = reverse * 10 + _x % 10
    _x = Math.floor(_x / 10)
  }
  return x === reverse
  */
  // 回文数的判断可以只取出一半的数进行对比即可
  while (x > reverse) {
    reverse = reverse * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return x === reverse || x === Math.floor(reverse / 10)
}
