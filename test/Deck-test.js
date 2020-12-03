const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', function() {

    let card1, card2, card3, deck;

    beforeEach(function() {
        card1 = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        card3 = new Card(3, 'Question3', ['a3', 'b3', 'c3'], 'a3');
        deck = new Deck(card1, card2, card3);
    });

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should instantiate the Deck class', function(){
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should take in cards', function() {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should count cards', function() {
        const cardCount = deck.countCards();
        expect(cardCount).to.equal(3);
    });
})