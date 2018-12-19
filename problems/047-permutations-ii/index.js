/**
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 * 输入: [1,1,2]
 * 输出:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = (module.exports = function(nums) {
  const len = nums.length
  if (len <= 1) return [nums]
  const ret = []
  const list = []
  const used = {}
  // 对数组进行排序
  nums = nums.sort((a, b) => a - b)

  function helper() {
    if (list.length === len) {
      ret.push(Array.from(list))
      return
    }
    for (let i = 0; i < len; i++) {
      // 跳过已存在的元素
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue
      }
      used[i] = true
      list.push(nums[i])
      helper()
      delete used[i]
      list.pop()
    }
  }
  helper()
  return ret
})
