const test = require('ava')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const problems = glob.sync(path.resolve(__dirname, '../problems/*'))

problems.forEach(dirPath => {
  const dirName = path.relative(path.dirname(dirPath), dirPath)

  const testcasesPath = path.join(dirPath, 'testcases.js')
  const programPath = path.join(dirPath, 'index.js')

  fs.existsSync(testcasesPath) && // 判断测试用例是否存在
  test(dirName, t => {
    const program = require(programPath)
    const testcases = require(testcasesPath)
    Array.isArray(testcases) || (t.fail())
    testcases.forEach(testcase => {
      t.deepEqual(
        program(...testcase.input),
        testcase.output
      )
    })
  })
})
