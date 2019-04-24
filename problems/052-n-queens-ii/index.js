/**
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * @param {number} n
 * @return {number}
 */
var totalNQueens = (module.exports = function(n) {
  function genBoard(max) {
    const board = new Array(max)
    for (let i = 0; i < n; i++) {
      board[i] = new Array(max)
    }
    return board
  }

  let count = 0
  const board = genBoard(n)

  function check(row, col) {
    for (let i = 0; i < row; i++) {
      // 纵向检测
      if (board[i][col] === 'Q') {
        return false
      }

      // 左斜方检测
      if (col - 1 - i >= 0 && board[row - 1 - i][col - 1 - i] === 'Q') {
        return false
      }

      // 右斜方检测
      if (col + 1 + i < n && board[row - 1 - i][col + 1 + i] === 'Q') {
        return false
      }
    }
    return true
  }
  function settleQueen(row) {
    if (row === n) {
      // 找到一种结果
      count++
      return true
    }
    for (let col = 0; col < n; col++) {
      board[row].fill('.')
      board[row][col] = 'Q'

      if (check(row, col)) {
        settleQueen(row + 1)
      } else {
        continue
      }
      board[row][col] = '.'
    }
  }

  settleQueen(0)

  return count
})
