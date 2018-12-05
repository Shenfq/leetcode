/**
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 1. 数字 1-9 在每一行只能出现一次。
 * 2. 数字 1-9 在每一列只能出现一次。
 * 3. 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 空白格用 '.' 表示。
 *
 * Note:
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = (module.exports = function(board) {
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
  function solve(position) {
    let idx = position

    while (idx < 81 && board[parseInt(idx / 9)][idx % 9] !== '.') {
      idx++
    }

    if (idx >= 81) {
      return true
    }

    let row = parseInt(idx / 9)
    let col = idx % 9
    let cell = 3 * parseInt(row / 3) + parseInt(col / 3)

    for (let i = 1; i < 10; i++) {
      let num = i - 1
      if (rowFlag[row][num] || colFlag[col][num] || cellFlag[cell][num]) {
        continue
      }
      board[row][col] = i.toString()
      rowFlag[row][num] = true
      colFlag[col][num] = true
      cellFlag[cell][num] = true
      if (solve(idx)) {
        return true
      }

      board[row][col] = '.'
      rowFlag[row][num] = false
      colFlag[col][num] = false
      cellFlag[cell][num] = false
    }

    return false
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num === '.') continue
      --num
      let cell = 3 * parseInt(i / 3) + parseInt(j / 3)
      if (rowFlag[i][num] || colFlag[j][num] || cellFlag[cell][num]) {
        continue
      }
      rowFlag[i][num] = true
      colFlag[j][num] = true
      cellFlag[cell][num] = true
    }
  }

  solve(0)

  return board
})
