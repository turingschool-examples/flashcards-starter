const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let card1, card2, card3, deck;

    beforeEach(function() {
      card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      card3 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
      deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', function() {
         expect(Deck).to.be.a('function');
    });
    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck);
    });
    it('should count each deck of cards', function() {
        const numberOfCards = deck.countCards();
        expect(numberOfCards).to.equal(deck.cards.length);
    });
});