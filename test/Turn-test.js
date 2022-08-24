const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn.js');
const Card = require('../src/Card')

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    turn = new Turn('sea otter', card)
    turn2 = new Turn('wrong', card)
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.instanceof(Turn)
  })

  it('should have a guess', () => {
    expect(turn.guess).to.equal('sea otter')
  })

  it('should have a card object', () => {
    expect(turn.card).to.equal(card)
  })

  it('should return a guess', () => {
    expect(turn.returnGuess()).to.equal("sea otter")
  })

  it('should return a card', () => {
    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate the guess against the correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.equal(false)
  })

  it('should give feedback on the answer', () => {
    turn.evaluateGuess()
    expect(turn.giveFeedback()).to.equal('correct!')
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  })

})
