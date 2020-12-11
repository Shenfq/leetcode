if (!process.argv[2]) {
  console.error('[题号]必填 - 请传入题号')
  process.exit(1)
}

function getNo(length) {
  length = length.toString()
  const len = length.length
  if (len === 1) {
    return `00${length}`
  } else if (len === 2) {
    return `0${length}`
  } else if (len === 3) {
    return length
  } else {
    console.error('error: 题号格式不合法')
    process.exit(1)
  }
}

const test = require('ava')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const No = getNo(process.argv[2])
const problems = glob.sync(path.resolve(__dirname, `../problems/${No}*`))

if (!problems || !problems.length) {
  console.error('error: 题目不存在')
  process.exit(1)
}

const [dirPath] = problems
const dirName = path.relative(path.dirname(dirPath), dirPath)

const testcasesPath = path.join(dirPath, 'testcases.js')
const programPath = path.join(dirPath, 'index.js')

fs.existsSync(testcasesPath) && // 判断测试用例是否存在
  test(dirName, t => {
    const program = require(programPath)
    const testcases = require(testcasesPath)
    Array.isArray(testcases) || t.fail()
    testcases.forEach(testcase => {
      const actVal = program(...testcase.input)
      const forVal = testcase.output
      console.log('act', actVal)
      console.log('for', forVal)
      t.deepEqual(actVal, forVal)
    })
  })
