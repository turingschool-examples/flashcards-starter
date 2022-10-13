const { util } = require('chai');
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe(`Round`, () => {
  let card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  let card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  let card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  let cards = [card1, card2, card3];
  let deck;
  let round;

  it(`should have a returnCurrentCard() method that returns the current card being played`, () =>  {
    deck = new Deck(cards)
    round = new Round(deck)

    expect(round.returnCurrentCard()).to.equal(cards[0])
  })

  it(`should have a turn count with a value of 0`, () => {
    deck = new Deck(cards)
    round = new Round(deck)

    expect(round.turnCount).to.equal(0)
  })

  it(`should have a takeTurn() method`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    expect(round.takeTurn(guess)).to.exist
  })

  it(`takeTurn() method should create a new Turn class instance`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    round.takeTurn(guess, round.returnCurrentCard())

    expect(round.turn.returnGuess()).to.equal(guess)
    expect(round.returnCurrentCard()).to.equal(deck.cards[1])
  })

  it(`takeTurn() method should accept a guess as a parameter`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'
    round.takeTurn(guess)

    expect(round.takeTurn(guess)).to.equal(`Sorry, your answer of 'guess' is incorrect.`)
  })

  it(`takeTurn() method should update turns count`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    const turnCheckBefore = round.turnCount
    
    round.takeTurn(guess)

    const turnCheckAfter = round.turnCount

    expect(turnCheckAfter).to.equal(turnCheckBefore + 1)
  })

  it(`the next card should become the current card`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    round.takeTurn(guess)

    expect(round.returnCurrentCard()).to.equal(cards[1])
  })

  it(`the guess should be evaluated to correct or incorrect`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'
    let outcome = round.takeTurn(guess)

    expect(outcome).to.equal(`Sorry, your answer of 'guess' is incorrect.`)

    guess = 'array'
    outcome = round.takeTurn(guess)

    expect(outcome).to.equal(`Great! Your answer of 'array' is correct!`)
  })

  it(`calculatePercentCorrect() should return the percentage of correct guesses`, () => {
    deck = new Deck(cards)
    round = new Round(deck)

    round.takeTurn('wrong')
    round.takeTurn('array')
    round.takeTurn('wrong')

    expect(round.calculatePercentCorrect()).to.equal(33)
  })
})