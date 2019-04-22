/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: [
 *  [".Q..",  // 解法 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 *  ["..Q.",  // 解法 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 *
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = (module.exports = function (n) {
  function genBoard (max) {
    const board = new Array(max)
    for (let i = 0; i < n; i++) {
      board[i] = new Array(max)
    }
    return board
  }

  const result = []
  const board = genBoard(n)

  function check(row, col) {
    for (let i = 0; i < row; i++) {
      // 纵向检测
      if (board[i][col] === 'Q') {
        return false
      }

      // 左斜方检测
      if (
        col - 1 - i >= 0 &&
        board[row - 1 - i][col - 1 - i] === 'Q'
      ) {
        return false
      }

      // 右斜方检测
      if (
        col + 1 + i < n &&
        board[row - 1 - i][col + 1 + i] === 'Q'
      ) {
        return false
      }
    }
    return true
  }
  function settleQueen(row) {
    if (row === n){
      // 找到一种结果
      result.push(board.map(row => row.join('')))
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

  return result
})
