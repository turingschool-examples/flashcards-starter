const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be instantiated with a deck of cards', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    expect(round.deck).to.deep.equal([card1, card2])
  })

  it('should have a default turn count of 0', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    expect(round.turn).to.equal(0)
  })

  it('should be able to store incorrect guesses', () =>{
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should start with a value of 0 for percent of correct answeres', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    expect(round.percentCorrect).to.equal(0)
  })

  it('should return the current card being played', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    round.returnCurrentCard()
    expect(round.deck[0]).to.equal(card1)
  })

  // it('should create a new instance of turn when a guess is made', () => {
  //   const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  //   const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  //   const deck = new Deck([card1, card2])
  //   const round = new Round(deck.cardsInDeck)
  //   round.takeTurn('green', 1)
  //   expect().to.be.a(new Turn())
  // })

  it('should increase turn count when a guess is made', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    round.takeTurn('green', card1)
    expect(round.turn).to.equal(1)
  })

it('should store incorrect guesses by card ID', () => {
  const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  const deck = new Deck([card1, card2])
  const round = new Round(deck)
  round.takeTurn('green',card1)
  expect(round.incorrectGuesses).to.deep.equal([1])
})

it('should update percent correct after a guess', () => {
  const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  const deck = new Deck([card1, card2])
  const round = new Round(deck)
  round.takeTurn('green', card1)
  round.takeTurn('4', card2)
  round.calculatePercentCorrect(2)
  expect(round.percentCorrect).to.equal(50)
})

it('should calulate and return percentage of correct guesses', () => {
  const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  const deck = new Deck([card1, card2])
  const round = new Round(deck)
  round.takeTurn('green', card1)
  round.takeTurn('4', card2)
  round.calculatePercentCorrect(2)
  expect(round.calculatePercentCorrect(2)).to.equal(50)
})

it('should notify the round is over and percentage of correct guesses', () =>{
  const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  const deck = new Deck([card1, card2])
  const round = new Round(deck)
  round.takeTurn('green', card1)
  round.takeTurn('4', card2)
  round.calculatePercentCorrect(2)
  round.endRound()
  expect(round.endRound()).to.equal('**Round Over!** You answered 50% of the questions correctly!')
})
})
