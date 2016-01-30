/**
 *
 *  MJML engine test suite.
 *
 *  Adding a test:
 *    create an mjml file <name>.mjml in the assets folder
 *    create an expected output file <name>.html in the same folder
 *
 *  Compile and run the tests:
 *    npm test
 *
 */

import engine from '../src'
import { expect } from 'chai'

describe('Register a component', () => {
  it('should return true when registering a new component', () => {
    expect(engine.registerElement('mock', {})).to.be.true
  })

  it('should return true when registering an already registered component', () => {
    const htmlElement = {}
    expect(engine.registerElement('html', htmlElement)).to.be.true
    expect(engine.elements.html).to.be.equal(htmlElement)
  })
})
