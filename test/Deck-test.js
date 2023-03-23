const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, cards, deck;

  beforeEach(function() {
    card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object');
    card2 = new Card(2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    card3 = new Card(3,
      'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'],
      'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should start with an array of cards', function() {
    expect(deck.cards).to.equal(cards);
  });

  it('should count the number of cards in the Deck', function() {
    expect(deck.countCards()).to.equal(3);
  });

});