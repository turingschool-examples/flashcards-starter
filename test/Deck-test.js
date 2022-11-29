const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', () => {

  let card
  let card1
  let card2 
  let deck
  beforeEach(() => {
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card1 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card2 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    
    deck = new Deck([card, card1, card2])
  })
  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should contain an array of instantiated cards', () => {
    expect(deck.cards).to.deep.equal([card, card1, card2])
  })

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3)

    const card3 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const deck1 = new Deck([card3])

    expect(deck1.countCards()).to.equal(1)
  })
})