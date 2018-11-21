module.exports = [
  {
    input: ['aa', 'c*'],
    output: false
  },
  {
    input: ['aab', 'c*a*b'],
    output: true
  },
  {
    input: ['mississippi', 'mis*is*ip*'],
    output: false
  }
]
