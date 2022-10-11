const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })
  it('should have a guess and a instantiation of card as parameters', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card)
    expect(turn.card).to.equal(card)
    expect(turn.guess).to.equal('pug')
  })
  it('should return guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card)
    //turn.returnGuess()
    expect(turn.returnGuess()).to.equal('pug')
  })
  it("should return card", () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card)
    //turn.returnCard()
    expect(turn.returnCard()).to.equal(card)
  })
  it('should check the guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card)
    const turn2 = new Turn('sea otter', card)
    turn1.evaluateGuess()
    expect(turn1.evaluateGuess()).to.equal(false)
    turn2.evaluateGuess()
    expect(turn2.evaluateGuess()).to.equal(true)
  })
  it('should give feedback on guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn1 = new Turn('pug', card)
    const turn2 = new Turn('sea otter', card)
    turn1.giveFeedback()
    expect(turn1.giveFeedback()).to.equal("incorrect!")
    turn2.giveFeedback()
    expect(turn2.giveFeedback()).to.equal("correct!")
  })
})