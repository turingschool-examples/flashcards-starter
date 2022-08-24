const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {
  let card1, card2, turn1, turn2;

  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"],
    "object"
    )
    card2 = new Card(2, "What is a comma-separated list of related values?",
    ["array", "object", "function"],
    "array"
    )

    turn1 = new Turn("object", card1)
    turn2 = new Turn("function", card2)

  })





  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  })

  it('should store a guess', () => {
    expect(turn1.userGuess).to.equal("object")
  })

  it('should store a card', () => {
    expect(turn2.currentCard).to.equal(card2)
  })

  it('should determine if guess is incorrect', () => {
    expect(turn2.evaluateGuess()).to.equal(false)
  })

  it('should determine if guess is correct', () => {
    expect(turn1.evaluateGuess()).to.equal(true)
  })

  it('should give feedback for wrong guess', () => {
    expect(turn2.giveFeedback()).to.equal('You wrong')
  })

  it('should give feedback for correct guess', () => {
    expect(turn1.giveFeedback()).to.equal('You right')
  })

})
