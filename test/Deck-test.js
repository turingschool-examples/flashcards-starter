const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();

        expect(Deck).to.be.a('function');
    });

    it('should instantiate the Deck class', function(){
        const deck = new Deck();

        expect(deck).to.be.an.instanceOf(Deck);
    });

    let card1, card2, card3;

    beforeEach(function() {
        card1 = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        card3 = new Card(3, 'Question3', ['a3', 'b3', 'c3'], 'a3');
    });

    it('should store cards', function() {
        const deck = new Deck();

        expect(deck.cards).to.deep.equal([]);
    })

    it('should take in cards', function() {
        const deck = new Deck(card1, card2, card3);

        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should count cards', function() {
        const deck = new Deck(card1, card2, card3);
        const cardCount = deck.countCards();

        expect(cardCount).to.equal(3);
    });
})