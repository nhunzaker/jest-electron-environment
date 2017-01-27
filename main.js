'use strict'

const { app, BrowserWindow } = require('electron')
const qs = require('querystring')

const args = process.argv.slice(2)
const debug = args.indexOf('--debug') >= 0

function run () {
  let runner = new BrowserWindow({
    title: "Jest",
    show: debug,
    contextIsolation: true
  })

  require('jest')

  let options = {
    moduleDirectories: ["<rootDir>/tests"],
    env: './src/jest-environment-electron'
  }

  runner.loadURL(`file://${__dirname}/runner.html?` + qs.stringify(options))

  if (debug) {
    runner.toggleDevTools()
  }

  runner.on('close', function () {
    runner = null
  })
}

app.on('ready', run)

app.on('window-all-closed', function () {
  app.quit()
})
