const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/Card');
const { createDeck, countCards } = require('../src/Deck');

describe('deck', function() {
  let card1, card2, card3, cards, deck;

  beforeEach(function() {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = createDeck(cards);
  });

  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create a deck and its properties', function() {
    expect(deck.cards).to.deep.equal(cards);
    expect(deck.numberOfCards).to.equal(3);
  });
  it('should be able to count the cards in the deck', function() {
    expect(countCards(deck)).to.equal(3);
  });
});
