/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 示例:
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = (module.exports = function(digits) {
  if (!digits || digits.length === 0) {
    return []
  }
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let res = []
  for (let i = 0, len = digits.length; i < len; i++) {
    let charArr = map[digits[i]]
    if (res.length === 0) {
      res = [...charArr]
    } else {
      let oldRes = [...res]
      res = []
      for (let m = 0, resLen = oldRes.length; m < resLen; m++) {
        for (let n = 0, charLen = charArr.length; n < charLen; n++) {
          res.push(oldRes[m] + charArr[n])
        }
      }
    }
  }
  return res
})
