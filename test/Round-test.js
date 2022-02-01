const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
// const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })

    it('should take in deck as argument and store cards in deck', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.deck).to.deep.equal([
            {
              id: 1,
              question: 'What type of object is closest to a list?',
              answers: [ 'array', 'string', 'boolean' ],
              correctAnswer: 'array'
            },
            {
              id: 2,
              question: 'What data type is 40?',
              answers: [ 'boolean', 'integer', 'string' ],
              correctAnswer: 'integer'
            },
            {
              id: 3,
              question: 'How do you check the length of a string or array?',
              answers: [ '.length', '.includes', '.sum' ],
              correctAnswer: '.length'
            }
          ]);
        expect(round.deck.length).to.equal(3);
    })

    it('should return current card', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What type of object is closest to a list?', answers: ['array', 'string', 'boolean'], correctAnswer: 'array' });
    })
})