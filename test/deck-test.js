const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck([]);
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should contain Card objects', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const deck = new Deck([card1, card2]);

        expect(card1).to.be.an.instanceof(Card);
        expect(deck.cards).to.deep.equal([card1, card2]);
    });
    it('should be able to count the cards', function() {
        const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        const deck = new Deck([card1, card2]);

        expect(deck.countCards()).to.deep.equal(2);
    })
})
