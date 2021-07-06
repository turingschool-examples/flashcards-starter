const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', () => {

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it.skip('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it.skip('should be able to hold multiple cards', () => {
        expect(deck.cards).to.equal([]);
    });

    it.skip('should be able to keep count of the cards', () => {
        expect(deck.count).to.equal(0);
    })
});