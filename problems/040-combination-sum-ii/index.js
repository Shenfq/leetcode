/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 说明：
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 *
 * 示例:
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = (module.exports = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const ret = []
  const len = candidates.length
  function helper(remain, idx, combi) {
    if (remain === 0) {
      ret.push(combi)
      return
    }
    if (remain < candidates[idx]) {
      return
    }
    for (let i = idx; i < len; i++) {
      const curr = candidates[i]
      // 如果当前数等于前一位数，进行减支
      // i != index + 1 && candidates[i] == candidates[i - 1]
      if (i > idx && curr === candidates[i - 1]) {
        continue
      }
      helper(remain - curr, i + 1, [...combi, curr])
    }
  }

  helper(target, 0, [])

  return ret
})
