if (!process.argv[2]) {
	console.error('[题号]必填 - 请传入题号')
	process.exit(1)
}

const test = require('ava')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const problems = glob.sync(path.resolve(__dirname, '../problems/*'))
const No = --process.argv[2]
const dirPath = problems[No]

const dirName = path.relative(path.dirname(dirPath), dirPath)

const testcasesPath = path.join(dirPath, 'testcases.js')
const programPath = path.join(dirPath, 'index.js')

fs.existsSync(testcasesPath) && // 判断测试用例是否存在
test(dirName, t => {
  const program = require(programPath)
  const testcases = require(testcasesPath)
  Array.isArray(testcases) || (t.fail())
  testcases.forEach(testcase => {
    const actVal = program(...testcase.input)
    const forVal = testcase.output
    console.log('act', actVal)
    console.log('for', forVal)
    t.deepEqual(
      actVal,
      forVal
    )
  })
})
