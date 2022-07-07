const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let card1;
    let card2;
    let card3;
    let deck;

    beforeEach(() => {
        card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
        card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
        card3 = new Card(26, 'shift(), unshift(), pop(), and push() are examples of what type of array property method?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
        deck = [card1, card2, card3];

    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');

    });

    it('should be an isnstance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);

    });

    it('should know how many cards are in the deck', () => {
        const cardAmount = deck.countCards();
        expect(cardAmount).to.equal(3);
        expect(cardAmount).to.deep.equal([card1, card2, card3]);

    });

});



