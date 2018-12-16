module.exports = [
  {
    input: ['ab', '?*'],
    output: true
  },
  {
    input: ['aa', 'a*'],
    output: true
  },
  {
    input: ['a', '?*'],
    output: true
  },
  {
    input: ['adceb', '*a*b'],
    output: true
  },
  {
    input: ['acdcb', 'a*c?b'],
    output: false
  },
  {
    input: ['akkkb', 'a???b'],
    output: true
  },
  {
    input: ['akkkb', 'a?*b'],
    output: true
  }
]
