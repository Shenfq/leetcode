const glob = require('glob')
const path = require('path')
const fs = require('fs')

const problems = glob.sync(path.resolve(__dirname, '../problems/*'))

problems.forEach(dirPath => {
  const dirName = path.relative(path.dirname(dirPath), dirPath)

  const testcasesPath = path.join(dirPath, 'testcases.js')
  const programPath = path.join(dirPath, 'index.js')

  // 判断测试用例是否存在
  if (!fs.existsSync(testcasesPath)) {
    fs.writeFileSync(testcasesPath, `module.exports = [
      {
        input: [],
        output: ''
      }
    ]`)
  }

})
