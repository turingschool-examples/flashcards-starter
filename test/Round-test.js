const { util } = require('chai');
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe(`Round`, () => {
  let card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  let card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  let card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  let cards = [card1, card2, card3];
  let deck;
  let round;

  it.skip(`should have a returnCurrentCard() method that returns the current card being played`, () =>  {
    deck = new Deck(cards)
    round = new Round(deck)

    expect(round.returnCurrentCard()).to.equal(cards[0])
  })

  it.skip(`should have a turn count with a value of 0`, () => {
    deck = new Deck(cards)
    round = new Round(deck)

    expect(round.turnCount).to.equal(0)
  })

  it.skip(`should have a takeTurn() method`, () => {
    deck = new Deck(cards)
    round = new Round(deck)

    expect(round.takeTurn()).to.be.a('function')
  })

  it.skip(`takeTurn() method should create a new Turn class instance`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    round.takeTurn(guess, round.returnCurrentCard())

    expect(round.turn.returnGuess()).to.equal(guess)
    expect(round.returnCurrentCard()).to.equal(deck.cards[1])
  })

  it.skip(`takeTurn() method should accept a guess as a parameter`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'
    round.takeTurn(guess)

    expect(round.guess).to.equal(guess)
  })

  it.skip(`takeTurn() method should update turns count`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    const turnCheckBefore = round.turns
    
    round.takeTurn()
    const turnCheckAfter = round.turns

    expect(turnCheckAfter).to.equal(turnCheckBefore + 1)
  })

  it.skip(`the next card should become the current card`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'

    round.takeTurn(guess)

    expect(round.returnCurrentCard()).to.equal(cards[1])
  })

  it.skip(`the guess should be evaluated to correct or incorrect`, () => {
    deck = new Deck(cards)
    round = new Round(deck)
    guess = 'guess'
    let outcome = round.takeTurn(guess)

    expect(outcome).to.equal(`Sorry, your answer of 'guess' is incorrect.`)

    guess = 'array'
    outcome = round.takeTurn(guess)

    expect(outcome).to.equal(`Great! Your answer of 'array' is correct!`)
  })
})