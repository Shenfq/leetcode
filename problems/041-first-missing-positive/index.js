/**
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 * 输入: [1,2,0]
 * 输出: 3
 *
 * 示例 2:
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 * 示例 3:
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 * 说明:
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = (module.exports = function(nums) {
  const len = nums.length
  if (len === 0) return 1
  for (let i = 0; i < len; i++) {
    let curr = nums[i]
    while (curr > 0 && curr <= len && curr !== nums[curr - 1]) {
      nums[i] = nums[curr - 1]
      nums[curr - 1] = curr
      curr = nums[i]
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
})
