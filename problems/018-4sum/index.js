/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 注意：答案中不可以包含重复的四元组。
 *
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 满足要求的四元组集合为：
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = module.exports =function(nums, target) {
  let result = []
  const len = nums.length
  if (len < 4) {
    return result
  }
  nums = nums.sort((a,b) => a - b)
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let [l, r] = [j + 1, len - 1]
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          l++
        }
        else if (sum > target) {
          r--
        }
        else {
          result.push([nums[i], nums[j], nums[l], nums[r]])
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
  }
  return result
}

