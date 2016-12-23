#!/usr/bin/env node


if (process.argv.length < 3) {
  console.log('配置输出文件路径')
  process.exit(1)
}

const output = process.argv[2]

const cheerio = require('cheerio')
const aglio = require('aglio')
const fs = require('fs')

const options = {
  input: 'asdasd',
  themeVariables: 'streak',
  themeTemplate: __dirname + '/../templates/index.jade'
}

fs.readFile(__dirname + '/../api.apib', 'utf-8', (err, data) => {

  if (err) {
    console.log('文件读取失败')
    console.log(err)
  }

  aglio.render(data, options, (err, html, warnings) => {
    if (err) return console.log(err);

    fs.writeFileSync(output, '<style>')

    let $ = cheerio.load(html)

    fs.appendFileSync(output, $('style').html())
    fs.appendFileSync(output, '</style>')

    fs.appendFile(output, $('body').html(), err => {
      if (err) {
        return console.log(err)
      }

      console.log('Success!')
    })

  })

})
