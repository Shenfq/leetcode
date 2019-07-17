/**
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释:连续子数组 [4,-1,2,1] 的和最大，为6。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (module.exports = function(nums) {
  const len = nums.length
  let res = nums[0]
  let sum = 0

  if (len === 0) return sum
  if (len === 1) return res

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(sum, res)
  }
  return res
})
