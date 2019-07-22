/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = (module.exports = function(matrix) {
  const m = matrix.length
  if (m <= 0) return []
  if (m === 1) return matrix[0]
  const n = matrix[0].length
  const result = []
  let rowStart = 0
  let rowEnd = m - 1
  let colStart = 0
  let colEnd = n - 1

  while (true) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i])
    }
    if (++rowStart > rowEnd) break

    for (let i = rowStart; i <= rowEnd; i++){
      result.push(matrix[i][colEnd])
    }
    if (--colEnd < colStart) break

    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i])
    }
    if (--rowEnd < rowStart) break

    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart])
    }
    if (++colStart > colEnd) break
  }

  return result
})
