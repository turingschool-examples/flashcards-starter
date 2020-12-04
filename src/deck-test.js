const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should hold cards', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const deck = new Deck([card1])

        expect(deck.cards).to.be.deep.equal([card1]);
    })

    it('should start with a deck of cards', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        const card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        const card4 = new Card(4, 'When is breakfast eaten', ['morning', 'afternoon', 'night'], 'morning');

        const deck = new Deck([card1, card2, card3, card4]);

        expect(deck.cards).to.have.lengthOf(4);
    })

    it('should count cards in deck', function() {
        const card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        const card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        const card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        const card4 = new Card(4, 'When is breakfast eaten', ['morning', 'afternoon', 'night'], 'morning');

        const deck = new Deck([card1, card2, card3, card4]);

        expect(deck.countCards()).to.be.equal(4);
    })
})