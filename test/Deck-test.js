const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const prototypeData = require('../src/data.js');

describe('Deck', function () {
    it('should be instantiated with an array of Card objects', () => {
            const card1 = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
            const card2 = new Card(12, 'What organ is Courtney missing?', ['kidney', 'appendix', 'gallbladder'], 'appendix');
            const card3 = new Card(22, 'What is Lucas\'s middle name?', ['John', 'Jose', 'Xavier'], 'Xavier');
            const deck = new Deck([card1, card2, card3]);

            expect(deck.cards).to.deep.equal([
                 {
                  id: 1,
                  question: "What is Courtney's favorite animal?",
                  answers: [ 'bee', 'horse', 'platypus' ],
                  correctAnswer: 'bee'
                },
                {
                  id: 12,
                  question: 'What organ is Courtney missing?',
                  answers: [ 'kidney', 'appendix', 'gallbladder' ],
                  correctAnswer: 'appendix'
                },
                {
                  id: 22,
                  question: "What is Lucas's middle name?",
                  answers: [ 'John', 'Jose', 'Xavier' ],
                  correctAnswer: 'Xavier'
                }
              ]);
    });

    it('should know how many Cards are in the Deck', () => {
        const card1 = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const card2 = new Card(12, 'What organ is Courtney missing?', ['kidney', 'appendix', 'gallbladder'], 'appendix');
        const card3 = new Card(22, 'What is Lucas\'s middle name?', ['John', 'Jose', 'Xavier'], 'Xavier');
        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.deep.equal(3);
      });
});
