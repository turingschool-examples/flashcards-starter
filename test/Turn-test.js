const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')

describe('Turn', () => {

  let turn
  let card
  beforeEach(() => {
    turn = new Turn('object', card)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })
  
  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn)
  })
})