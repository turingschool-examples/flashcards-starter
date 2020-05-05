const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

beforeEach(() => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(1, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'no')
  turn1 = new Turn('no', card1)
  turn2 = new Turn('huh?', card2)
})

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  });
  it('should be able to return a guess', () => {
    expect(turn1.returnGuess()).to.equal('no')
  });
  it('should be able to return a card', () => {
    expect(turn1.returnCard()).to.deep.equal(card1)
  })
  it('should evaluate the user guess', () => {
    expect(turn1.evaluateGuess()).to.equal(true)
    expect(turn2.evaluateGuess()).to.equal(false)
  })
  it('should give the user feed back', () => {
    turn1.evaluateGuess()
    turn2.evaluateGuess()
    expect(turn1.giveFeedback()).to.equal('correct')
    expect(turn2.giveFeedback()).to.equal('incorrect')
  })
})
