/**
 * 给定一个字符串 s 和一些长度相同的单词 words。在 s 中找出可以恰好串联 words 中所有单词的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 *
 * 示例 :
 * 输入:
 *   s = "barfoothefoobarman",
 *   words = ["foo","bar"]
 * 输出: [0,9]
 * 解释: 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = (module.exports = function(s, words) {
  const wordsLen = words.length
  const sLen = s.length
  if (wordsLen === 0 || sLen === 0) return []
  const wordLen = words[0].length
  const expect = {}
  const result = []
  for (let word of words) {
    if (expect[word]) {
      expect[word]++
    } else {
      expect[word] = 1
    }
  }
  for (let i = 0; i < wordLen; i++) {
    let l = i
    let r = i
    let window = {}
    while (r + wordLen <= sLen) {
      let word = s.substr(r, wordLen)
      if (!expect[word]) {
        window = {}
        r += wordLen
        l = r
        continue
      }

      if (window[word]) {
        window[word]++
      } else {
        window[word] = 1
      }

      r += wordLen

      if (window[word] < expect[word]) {
        continue
      }
      while (window[word] > expect[word]) {
        let leftWord = s.substr(l, wordLen)
        window[leftWord] -= 1
        if (window[leftWord] === 0) {
          delete window[leftWord]
        }
        l += wordLen
      }
      // 当前单词个数等于目标单词个数，比较目前单词总数与目标单词总数是否相等，
      if (window[word] === expect[word] && r - l === wordLen * wordsLen) {
        // 如果不相等：r右移，添加最右端单词(跳到下一次循环自动执行)。
        // 如果相等：删除最左端单词，l右移；r右移，添加最右端单词(跳到下一次循环自动执行)。
        result.push(l)
      }
    }
  }
  return result
})
