const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should know how many cards are in the deck', function() {
    const card1 = new Card (1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card2 = new Card (2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const deck = new Deck([card1, card2]);
    deck.countCards([card1, card2])
    expect(deck.cardArray.length).to.deep.equal(2)
  })
})