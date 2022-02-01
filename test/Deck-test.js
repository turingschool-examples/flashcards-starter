const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should take in array of cards as argument and save to array', () => {
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const deck = new Deck([card]);

        expect(deck.cards).to.deep.equal([{ id: 1, question: 'What type of object is closest to a list?', answers: ['array', 'string', 'boolean'], correctAnswer: 'array' }]);
    })

    it('should count cards in deck', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.equal(3);
    })
})