const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {

    expect(Turn).to.be.a('function')
  })
  it('should have a guess and a instantiation of card as parameters', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card1)

    expect(turn.card).to.deep.equal(card1)
    expect(turn.guess).to.equal('pug')
  })
  it('should return guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card)
    const pugGuess = turn.returnGuess()

    expect(pugGuess).to.equal('pug')
  })
  it("should return card", () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const turn = new Turn('pug', card)
    const cardReturned = turn.returnCard()

    expect(cardReturned).to.deep.equal(card)
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
    turn2.giveFeedback()

    expect(turn1.giveFeedback()).to.equal("incorrect!")
    expect(turn2.giveFeedback()).to.equal("correct!")
  })
})