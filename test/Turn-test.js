const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of a Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it.skip('should take the user\'s attempt', function() {
    const turn = new Turn('iterators')
    //turn.returnGuess()
  })

  it.skip('should take in a new Card instance', function() {
    const turn = new Turn()
    //turn.returnCard()
  })

  it.skip('should evaluate if the user\'s guess matches the correct answer' , function() {
    const turn = new Turn()
    //turn.evaluateGuess()
  })

  it.skip('should provide a feedback if answer is right'), function() {
    const turn = new Turn()
    //turn.giveFeedback()
  }

})