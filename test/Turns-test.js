const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turns')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should return user guess', function() {
    expect(turn.returnGuess()).to.equal('guess')
  })

  it('should return the current card', function() {
    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate the guess to true when correct', function() {
    expect(turn.evaluateGuess()).to.equal(true)
  })
  it('should evaluate the guess to false when incorrect', function() {
    expect(turn.evaluateGuess()).to.equal(false)
  })
  it('should provide correct feedback when guessing correctly', function() {
    expect(turn.provideFeedback()).to.equal('Correct!')
  })
  it('should provide incorrect feedback when guessing incorrectly', function() {
    expect(turn.provideFeedback()).to.equal('Incorrect!')
  })
})
