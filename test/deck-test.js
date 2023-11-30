const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');


describe('deck', function() {
    it('should be a function', function() {
      expect(createDeck).to.be.a('function');
    });
    it('should create a deck and its properties', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      expect(deck.cards).to.deep.equal(cards);
      expect(deck.numberOfCards).to.equal(3);
    });
  });