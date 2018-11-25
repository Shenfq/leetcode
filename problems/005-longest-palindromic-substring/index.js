/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba"也是一个有效答案。
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (module.exports = function(s) {
  const str = `#${s.split('').join('#')}#`
  const len = str.length
  let RL = Array(len)
  let MaxRight = 0
  let pos = 0
  let MaxLen = 0
  for (let i = 0; i < len; i++) {
    if (i < MaxRight) {
      let j = 2 * pos - i
      RL[i] = Math.min(RL[j], MaxRight - i)
    } else {
      RL[i] = 1
    }
    while (
      i - RL[i] >= 0 &&
      i + RL[i] <= len &&
      str[i - RL[i]] === str[i + RL[i]]
    ) {
      RL[i] += 1
    }
    if (RL[i] + i - 1 > MaxRight) {
      MaxRight = RL[i] + i - 1
      pos = i
    }

    MaxLen = Math.max(MaxLen, RL[i])
  }
  const maxIndex = RL.indexOf(MaxLen)
  const start = Math.floor((maxIndex - (MaxLen - 1)) / 2)
  const palindrome = s.slice(start, start + MaxLen - 1)
  return palindrome
})
