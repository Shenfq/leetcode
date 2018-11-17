/**
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"
 * 实现一个将字符串进行指定行数变换的函数:
 * string convert(string s, int numRows);
 *
 * 输入: s = "PAYPALISHIRING", numRows = 4
 * 输出: "PINALSIGYAHRPI"
 * 解释:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length
  if (numRows <= 1 || len <= numRows) {
    return s
  }
  const rowLen = numRows - 1
  const result = new Array(numRows).fill('')
  let idx = 0, step = 1
  for (let i = 0; i < len; i++) {
    result[idx] += s[i]
    if (idx === 0) {
      step = 1
    } else if (idx === rowLen) {
      step = -1
    }
    idx += step
  }
  return result.join('')
};

console.log(
  convert('PAYPALISHIRING', 4)
)
