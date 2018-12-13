/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 * 示例:
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 * @param {number[]} height
 * @return {number}
 */

/*
// 解法一
var trap = (module.exports = function(height) {
  const len = height.length
  if (len === 0) return 0
  let max = 0
  let maxIdx = 0
  for (let i = 0; i < len; i++) {
    if (max < height[i]) {
      max = height[i]
      maxIdx = i
    }
  }
  let area = 0
  let root = height[0]
  for (let i = 0; i < maxIdx; i++) {
    if (root < height[i]) {
      root = height[i]
    } else {
      area += root - height[i]
    }
  }
  root = height[len - 1]
  for (let i = len - 1; i > maxIdx; i--) {
    if (root < height[i]) {
      root = height[i]
    } else {
      area += root - height[i]
    }
  }

  return area
})
*/
// 解法二
var trap = (module.exports = function(height) {
  const len = height.length
  if (len === 0) return 0
  let l = 0
  let r = len - 1
  let lth = height[l]
  let rth = height[r]
  let area = 0
  while (l < r) {
    if (height[l] < height[r]) {
      if (lth <= height[l]) {
        lth = height[l]
      } else {
        area += lth - height[l]
      }
      l++
    } else {
      if (rth <= height[r]) {
        rth = height[r]
      } else {
        area += rth - height[r]
      }
      r--
    }
  }
  return area
})
