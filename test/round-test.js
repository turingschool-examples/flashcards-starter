const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards} = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    it('should create a round with its properties', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        const newDeck = createDeck([card1, card2, card3]);

        const round = createRound(newDeck);

        expect(round.deck).to.deep.equal(newDeck);
        expect(round.currentCard).to.deep.equal(card1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

})