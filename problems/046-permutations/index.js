/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permutations = (module.exports = function(nums) {
  const ret = []
  const len = nums.length
  function helper (idx) {
    if (idx === len - 1) {
      ret.push(Array.from(nums))
      return
    }
    for (let i = idx; i < len; i++) {
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
      helper(idx + 1);
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
  }
  helper(0)
  return ret
})
