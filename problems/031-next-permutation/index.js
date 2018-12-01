/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = (module.exports = function(nums) {
  let r = nums.length - 1
  let num = nums[r]
  while (r > 0) {
    num = nums[r]
    if (num <= nums[r - 1]) {
      r--
      continue
    }
    let i = nums.length - 1
    for (; i > r; i--) {
      if (nums[i] > nums[r - 1]) break
    }
    let tmp = nums[r - 1]
    nums[r - 1] = nums[i]
    nums[i] = tmp
    let rest = nums.slice(r).reverse()
    nums.splice(r, nums.length - r, ...rest)
    return nums
  }
  nums = nums.reverse()
  return nums
})
