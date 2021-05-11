/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function () {
    const turn = new Turn() 
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should instantiate users guess and card', function () {
    const turn = new Turn('guess')
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    expect(turn.guess).to.be.a('string')
    expect(turn.currentCard).to.equal(card)
  })

})