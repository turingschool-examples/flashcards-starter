const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', () => {
    let card1, card2, card3, deck;

    beforeEach(() => {
        card1 = new Card(10, 'Which iteration method returns the first array element where the callback function returns true?', ['find()', 'filter()', 'forEach()'], 'find()');
        card2 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
        card3 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ['Object.keys()', 'Object.values()', 'reduce()'], 'Object.keys()');

        deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should be able to store multiple cards', () => {
        let cards = [card1, card2, card3];
        expect(deck.cards).to.deep.equal(cards);

    });

    it('should be able to keep count of the cards', () => {
        expect(deck.countCards()).to.equal(3);
        expect(deck.count).to.equal(3);
    })
});