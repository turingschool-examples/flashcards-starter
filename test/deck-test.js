const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let deck, card1, card2, card3, card4;
    beforeEach(() => {
        deck = new Deck([card1, card2, card3, card4])
        card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        card4 = new Card(4, 'When is breakfast eaten', ['morning', 'afternoon', 'night'], 'morning')

    })

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should hold cards', function() {
        expect(deck.cards).to.be.deep.equal([card1, card2, card3, card4]);
    })

    it('should start with a deck of cards', function() {
        expect(deck.cards).to.have.lengthOf(4);
    })

    it('should count cards in deck', function() {
        expect(deck.countCards()).to.be.equal(4);
    })

})