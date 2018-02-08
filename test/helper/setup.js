'use strict'

var chai = require('chai')
global.sinon = require('sinon')
global.rewire = require('rewire')

chai.config.includeStack = true
global.expect = chai.expect
global.AssertionError = chai.AssertionError
global.Assertion = chai.Assertion
global.assert = chai.assert
