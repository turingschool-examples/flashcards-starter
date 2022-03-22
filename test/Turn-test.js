const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
describe("Turn", function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take in a string(guess) as an argument', function() {
    const turn = new Turn('object', card)
    expect(turn.guess).to.equal('object')
  })

  it('should take in a Card object as an argument', function() {
    const turn = new Turn('object', card)
    expect(turn.card).to.equal(card)
  })

  it.skip('should return a guess', function() {
    const turn = new Turn('guess', card)
      expect(turn.returnGuess()).to.equal('object')
  })

  it.skip('should return the current card', function() {
    const turn = new Turn('object', card)
      expect(turn.returnCard()).to.equal(card)
  })

  it.skip('should return false if guess is wrong', function() {
    const turn = new Turn('array', card)
      expect(turn.evaluateGuess()).to.equal(false)
  })

  it.skip('should return true if guess is correct', function() {
    const turn = new Turn('object', card)
      expect(turn.evaluateGuess()).to.equal(true)
  })

  it.skip('should return "incorrect!" if guess is incorrect', function() {
    const turn = new Turn('object', card)
      expect(turn.giveFeedback()).to.equal('incorrect!')
  })

  it.skip('should return "correct!" if guess is correct', function() {
    const turn = new Turn('object', card)
      expect(turn.giveFeedback()).to.equal('correct!')
  })

})
