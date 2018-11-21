/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1, r = len - 1
    while (l < r) {
      const tmp = nums[i] + nums[l] + nums[r]
      if (tmp > 0) {
        r--
      } else if (tmp < 0) {
        l++
      } else {
        result.push([nums[i], nums[l], nums[r]])
        l++
        r--
        while(l < r && nums[l] === nums[l - 1]) {
          l++
        }
        while(l < r && nums[r] === nums[r + 1]) {
          r--
        }
      }
    }
  }
  return result
};

console.log(
  threeSum([-1, 0, 1, 2, -1, -4])
)
