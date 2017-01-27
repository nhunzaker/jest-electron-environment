'use strict'

const FakeTimers = require('jest-util').FakeTimers
const installCommonGlobals = require('jest-util').installCommonGlobals
const ModuleMocker = require('jest-mock')

class ElectronEnvironment {

  constructor(config) {
    const global = this.global = window

    installCommonGlobals(global, config.globals)

    this.moduleMocker = new ModuleMocker(global)
    this.fakeTimers = new FakeTimers(global, this.moduleMocker, config)
  }

  dispose() {
    if (this.fakeTimers) {
      this.fakeTimers.dispose()
    }

    this.fakeTimers = null
  }

  runScript(script) {
    return script.runInThisContext()
  }


}

module.exports = ElectronEnvironment
