const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function() {

    it('should be a function', function() {
        expect(Deck).to.be.a('function')
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
    }); 

    it('should know how many cards there are', function() {
        card = new Card()
        card2 = new Card()
        card3 = new Card()

        deck = new Deck ([card, card2, card3])

        deck.countCards();

        expect(deck.countCards()).to.equal(deck.cards.length)
    });
})