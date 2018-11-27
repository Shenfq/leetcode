module.exports = [
  {
    input: [2147483647, 2],
    output: 1073741823
  },
  {
    input: [-2147483648, -1],
    output: 2147483647
  },
  {
    input: [1, 1],
    output: 1
  },
  {
    input: [0, 3],
    output: 0
  },
  {
    input: [10, 3],
    output: 3
  },
  {
    input: [103, -3],
    output: -34
  }
]
