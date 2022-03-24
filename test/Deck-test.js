const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  let card1;
  let card2;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    deck = new Deck([card1, card2]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have an array of Card objects', function() {
    expect(deck.cards).to.be.an('array');
    expect(deck.cards[0]).to.be.an('object');
  });

  it('should have a counter of how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(2);
  });
})
