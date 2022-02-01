const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should take in a guess', function() {
    let firstTurn = new Turn('pig')
    expect(firstTurn.guess).to.equal('pig')
  })

  it('should take in a new instantiation of Card Class', function() {
    const card = new Card()
    let firstTurn = new Turn('pig', card)
    expect(firstTurn.card).to.equal(card)
  })

  it('should create a method that returns the geuss', function() {
    const card = new Card()
    const firstTurn = new Turn('pig', card)
    expect(firstTurn.returnGuess()).to.equal('pig')
  })
})
