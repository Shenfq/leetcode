/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 *
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (module.exports = function(strs) {
  var map = {}
  var sort = Array.prototype.sort
  for (let str of strs) {
    var sorted = sort.call(str.split('')).join('')
    if (map[sorted]) {
      map[sorted].push(str)
    } else {
      map[sorted] = [str]
    }
  }
  return Object.values(map)
})
