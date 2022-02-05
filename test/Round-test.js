const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
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

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {
    expect(round).to.be.a.instanceOf(Round)
  })

  it('should have a deck of cards', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should have a current card', () => {
    expect(round.currentCard).to.equal(card1)
  })

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should update turn count when a turn is taken', () => {
    round.takeTurn()
    expect(round.turnCount).to.equal(1)
  })

  it('should store an incorrect guess', () => {
    const round = new Round(deck)
    round.takeTurn("array")
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should say "correct!" when answer is correct', () => {
    const round = new Round(deck);
    expect(round.takeTurn("object")).to.equal('correct!')
  })

  it('should say "incorrect!" when answer is incorrect', () => {
    const round = new Round(deck);
    expect(round.takeTurn("array")).to.equal('incorrect!')
  })

  // it('should create an instance of Turn', () => {
  //   const round = new Round(deck);
  //   round.takeTurn('array')
  //   expect(turn).to.be.a.instanceOf(Turn)
  // })

  it('should change currentCard to the next card', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    expect(round.currentCard).to.deep.equal(card2)
    round.takeTurn('array')
    expect(round.currentCard).to.deep.equal(card3)
  })

  it('should calculate the percentage of correct guesses', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    round.takeTurn('array')
    round.takeTurn('accessor method')
    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it('should end the round', () => {
    const round = new Round(deck);
    round.takeTurn('array')
    round.takeTurn('array')
    round.takeTurn('accessor method')
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })

})
