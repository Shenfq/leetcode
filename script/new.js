if (!process.argv[2]) {
  console.error('[名称]必填 - 请传入题目名称')
  process.exit(1)
}

const dirName = process.argv[2]
const path = require('path')
const glob = require('glob')
const fs = require('fs')
const problemPath = path.resolve(__dirname, '../problems')
const problems = glob.sync(path.resolve(__dirname, '../problems/*'))
const length = (++problems.length).toString()
const No =
  length.length === 1
    ? `00${length}`
    : length.length === 2
    ? `0${length}`
    : length

const dirPath = path.join(problemPath, `${No}-${dirName}`)

if (fs.existsSync(dirPath)) {
  console.error(`${No}-${dirName} 已经存在`)
  process.exit(1)
} else {
  fs.mkdirSync(dirPath)
}

const testcasesPath = path.join(dirPath, 'testcases.js')
const programPath = path.join(dirPath, 'index.js')
const readmePath = path.join(dirPath, 'README.md')

// 判断js文件是否存在
if (!fs.existsSync(programPath)) {
  fs.writeFileSync(
    programPath,
    `/**
 * @param {}
 * @return {}
 */
var ${dirName} = (module.exports = function() {

})
 `
  )
  console.log('created: ', programPath)
}
// 判断测试用例是否存在
if (!fs.existsSync(testcasesPath)) {
  fs.writeFileSync(
    testcasesPath,
    `module.exports = [
    {
      input: [],
      output: ''
    }
  ]`
  )
  console.log('created: ', testcasesPath)
}
// 判断测试用例是否存在
if (!fs.existsSync(readmePath)) {
  fs.writeFileSync(readmePath, `# ${dirName}`)
  console.log('created: ', testcasesPath)
}
console.log(`\r\n`)
console.log(`${No}-${dirName} generate done!`)
