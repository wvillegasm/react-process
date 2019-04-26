/* eslint-env node, mocha */

import Enzyme from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16/build'
import chai from 'chai'
import register from 'ignore-styles'

global.sinon = require('sinon')
global.rewire = require('rewire')

Enzyme.configure({ adapter: new Adapter() })
global.enzyme = Enzyme
global.shallow = Enzyme.shallow

chai.config.includeStack = true
global.expect = chai.expect
global.AssertionError = chai.AssertionError
global.Assertion = chai.Assertion
global.assert = chai.assert

register(['.css', '.scss'])
