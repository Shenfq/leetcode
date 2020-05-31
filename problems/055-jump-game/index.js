/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 *
 * 示例 1:
 *
 * 输入: [2,3,1,1,4]
 * 输出: true
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var jumpGame = (module.exports = function(nums) {
  let step = 0
  const { length } = nums
  for (let i = 0; i < length; i++) {
    if (i > step) {
      return false
    }
    step = Math.max(step, i + nums[i])
    if (step >= length) {
      return true
    }
  }
  return true
})
