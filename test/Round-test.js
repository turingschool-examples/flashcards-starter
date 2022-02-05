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
const round = new Round(deck)

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

  it.skip('should create a new Turn instance')

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

  it.skip('should store an incorrect guess', () => {
    const round = new Round(deck)
    round.takeTurn("array")
    expect(round.incorrectGuesses).to.equal([1])
  })

  it.skip('should say "correct!" when answer is correct', () => {
    const round = new Round(deck);
    expect(round.takeTurn("object")).to.return('correct!')
  })

  it.skip('should say "incorrect!" when answer is incorrect', () => {
    const round = new Round(deck);
    expect(round.takeTurn("array")).to.return('incorrect!')
  })

  it.skip('should create and instance of Turn', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it.skip('should change currentCard to the next card', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    expect(round.currentCard).to.equal(card2)
    round.takeTurn('array')
    expect(round.currentCard).to.equal(card3)
  })

  it.skip('should calculate the percentage of correct guesses', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    round.takeTurn('array')
    round.takeTurn('accessor method')
    expect(round.calculatePercentCorrect).to.equal(33)
  })

  it.skip('should end the round', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    round.takeTurn('array')
    round.takeTurn('accessor method')
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
  )
})
//expect(card).to.be.an.instanceof(Card);
