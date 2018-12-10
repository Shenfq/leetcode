/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 * 示例:
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 *   [7],
 *   [2,2,3]
 * ]
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = (module.exports = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const ret = []
  const len = candidates.length
  const min = candidates[0]
  function helper(remain, idx, combi) {
    if (remain === 0) {
      ret.push(combi)
      return
    }
    if (remain < min) {
      return
    }
    for (; idx < len; idx++) {
      helper(remain - candidates[idx], idx, [...combi, candidates[idx]])
    }
  }

  helper(target, 0, [])

  return ret
})
