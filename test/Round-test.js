const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

const card1 = new Card(
  1,
  "What allows you to define a set of related information using key-value pairs?",
  ["object", "array", "function"],
  "object"
)

const card2 = new Card(
  2,
  "What is a comma-separated list of related values?",
  ["array", "object", "function"],
  "array"
)

const card3 = new Card(
  3,
  "What type of prototype method directly modifies the existing array?",
  ["mutator method", "accessor method", "iteration method"],
  "mutator method"
)
const deck = new Deck([card1, card2, card3]);

describe('Round', () => {

  it.skip('should be a function', () => {
  expect(Round).to.be.a.('function')
  })

  it.skip('should be an instance of Round', () => {
    expect(round).to.be.a.instanceOf(Round)
  })

  it.skip('should have a deck of cards', () => {
    expect(round.deck).to.equal(deck)
  })

  it.skip('should have a current card', () => {
    expect(round.currentCard).to.equal(card1)
  })

  it.skip('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it.skip('should update turn count when a turn is taken', () => {
    round.takeTurn()
    expect(round.turnCount).to.equal(1)
  })

  it.skip('should return true if guess is true', () => {
    expect(round.takeTurn("object")).to.return(true)
  })

  it.skip('should return false if guess is false', () => {
    expect(round.takeTurn("array")).to.return(false)
  })

  it.skip('should say "correct!" when answer is correct', () => {
    expect(round.takeTurn('array').to.return('correct!')

  })
})
