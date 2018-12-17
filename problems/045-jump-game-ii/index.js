/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 示例:
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 *      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = (module.exports = function(nums) {
  const len = nums.length
  if (len <= 1) return 0
  let step = 0
  let dist = 0
  let max = 0
  for (let i = 0; i < len; i++) {
    // 如果之前跳远的最长距离小于当前索要，进行跳跃并更新距离
    if (dist < i) {
      step++
      dist = max
    }
    // 当前能达到的最远距离
    if (max < nums[i] + i) {
      max = nums[i] + i
      if (max >= len - 1) {
        return step + 1
      }
    }
  }
  return step
})
