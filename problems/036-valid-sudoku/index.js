/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 1. 数字 1-9 在每一行只能出现一次。
 * 2. 数字 1-9 在每一列只能出现一次。
 * 3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 * `./README.md` 中的图是一个部分填充的有效的数独。
 *
 * 示例:
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 * 输入:
 * [
 *   ["5","3",".",".","7",".",".",".","."],
 *   ["6",".",".","1","9","5",".",".","."],
 *   [".","9","8",".",".",".",".","6","."],
 *   ["8",".",".",".","6",".",".",".","3"],
 *   ["4",".",".","8",".","3",".",".","1"],
 *   ["7",".",".",".","2",".",".",".","6"],
 *   [".","6",".",".",".",".","2","8","."],
 *   [".",".",".","4","1","9",".",".","5"],
 *   [".",".",".",".","8",".",".","7","9"]
 * ]
 * 输出: true
 *
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (module.exports = function(board) {
  function genArr(len) {
    let ret = []
    for (let i of Array(len)) {
      ret.push(Array(len))
    }
    return ret
  }
  const rowFlag = genArr(9)
  const colFlag = genArr(9)
  const cellFlag = genArr(9)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num === '.') continue
      --num
      let cell = 3 * parseInt(i / 3) + parseInt(j / 3)
      if (rowFlag[i][num] || colFlag[j][num] || cellFlag[cell][num]) {
        return false
      }
      rowFlag[i][num] = true
      colFlag[j][num] = true
      cellFlag[cell][num] = true
    }
  }
  return true
})
