const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Round', () => {
  
  let round
  let deck
  let card
  let card1
  let card2

  beforeEach(() => {
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card2 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    deck = new Deck([card, card1, card2])
    round = new Round(deck)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should start with a deck of cards', () => {
    expect(round.deck).to.equal(deck)
  })

  it('should start with 0 turns as default', () => {
    expect(round.turn).to.equal(0)
  })

  it('should be able to keep track of cards that were guessed incorrectly', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should keep track of the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card)
  })
})