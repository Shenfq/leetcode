/**
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = module.exports = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let ret = Number.MAX_SAFE_INTEGER
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1, r = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (
        Math.abs(sum - target) < Math.abs(ret - target)
      ) {
        ret = sum
      }

      if (sum < target) {
        l++
      } else if (sum > target) {
        r--
      } else {
        return sum
      }
    }
  }
  return ret
}
