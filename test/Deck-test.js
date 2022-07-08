const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data')
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let cards;
    let deck;

    beforeEach(function() {
        cards = [
            new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array'),
            new Card(12, 'Which iteration method returns an array of the same length as the original array?', ['map()', 'forEach()', 'reduce()'], 'map()'),
            new Card(22, 'Which prototype method is used to iterate over each property of an object?', ['Object.keys()', 'Object.values()', 'reduce()'], 'Object.keys()')
        ];
        deck = new Deck(cards);
    })

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    })

    it('should be a new instance of Deck', function() {
        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('should be able to store cards', function() {
        expect(deck.cards).to.deep.equal(cards);
    })

    it('should be able to count cards in a deck', function() {
        expect(deck.countCards()).to.equal(deck.cards.length)
    })
});