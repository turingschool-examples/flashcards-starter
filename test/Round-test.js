const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
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

    it('should store and return current card', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What type of object is closest to a list?', answers: ['array', 'string', 'boolean'], correctAnswer: 'array' });
        expect(round.currentCard).to.deep.equal({ id: 1, question: 'What type of object is closest to a list?', answers: ['array', 'string', 'boolean'], correctAnswer: 'array' });
    })

    it('should be able to take turns', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.takeTurn).to.be.a('function');
    })

    it('should update turns count when each new turn', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(2);
    })

    it('should instantiate turn class when entering a guess', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn('array');

        // expect(round.turn).to.be.an.instanceof(Turn);

        ////need to come back to this, how to test for instantiated class without returning it
    })

    it('should change to next card after each turn', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn('array');
        
        expect(round.currentCard).to.deep.equal({ id: 2, question: 'What data type is 40?', answers: ['boolean', 'integer', 'string'], correctAnswer: 'integer' });
        
        round.takeTurn('integer');

        expect(round.currentCard).to.deep.equal({ id: 3, question: 'How do you check the length of a string or array?', answers: ['.length', '.includes', '.sum'], correctAnswer: '.length' })
    })

    it('should evaluate if guess is true or false', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.takeTurn('array')).to.equal('correct!');
        expect(round.takeTurn('string')).to.equal('incorrect!');
    })

    it('should add incorrect answers to incorrectGuesses array by id', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const deck = new Deck([card1]);
        const round = new Round(deck);
        round.takeTurn('string');

        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.incorrectGuesses).to.deep.equal([1]);
    })

    it('should calculate percentage of correct answers', () => {
        const card1 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const card2 = new Card(2, 'What data type is 40?', ['boolean', 'integer', 'string'], 'integer');
        const card3 = new Card(3, 'How do you check the length of a string or array?', ['.length', '.includes', '.sum'], '.length');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        
    })
})