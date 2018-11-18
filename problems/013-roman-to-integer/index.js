/**
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  }
  const length = s.length
  let result = 0
  for (let i = 0; i < length; i++) {
    let char = s[i]
    let next = s[i + 1]
    if (map[char] < map[next]) {
      i++
      result += map[next] - map[char]
    } else {
      result += map[char]
    }
  }

  return result
};

// 58 1994
console.log(
  romanToInt('LVIII'),
  romanToInt('MCMXCIV')
)
