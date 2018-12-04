/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 * 示例 2:
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = (module.exports = function(nums, target) {
  if (nums.length === 0) return 0
  let l = 0
  let r = nums.length - 1
  let mid = 0
  while (l <= r) {
    mid = Math.floor((r + l) / 2)
    let curr = nums[mid]
    if (curr === target) {
      return mid
    } else if (curr < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
})
