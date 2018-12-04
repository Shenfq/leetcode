/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。
 * 找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (module.exports = function(nums, target) {
  let ret = [-1, -1]
  if (nums.length === 0) return ret
  let l = 0
  let r = nums.length - 1
  let mid = 0
  while (l <= r) {
    mid = Math.floor((r + l) / 2)
    let curr = nums[mid]
    if (curr === target) {
      break
    } else if (curr < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  if (nums[mid] !== target) {
    return ret
  }
  let start = mid
  let end = mid
  while (nums[start] === target) {
    ret[0] = start
    start--
  }
  while (nums[end] === target) {
    ret[1] = end
    end++
  }
  return ret
})
