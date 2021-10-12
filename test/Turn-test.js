const expect = require('chai').expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js')

describe('Turn', function() {

  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter")
    turn = new Turn('Pug', card)
  })

  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should take in a guess', function() {
    expect(turn.guess).to.equal('Pug')
  })

  it('should instantiate a new card for the current card', function() {
    expect(turn.card).to.equal(card)
  })

  it('should return the users guess', function() {
    turn.returnGuess()
    expect(turn.returnGuess()).to.equal('Pug')
  })

  it('should return the users card', function() {
    turn.returnCard()
    expect(turn.returnCard()).to.equal(card)
  })

  it('should return true or false if the guess matches the correct answer', function() {
    turn.evaluateGuess()
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should provide feedback depending on correct or incorrect', function() {
    turn.giveFeedback()
    expect(turn.giveFeedback()).to.equal('incorrect')
  })

})
