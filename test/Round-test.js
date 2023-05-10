const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, endRound, calculatePercentCorrect } = require('../src/round');

const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const deck = createDeck([card1, card2, card3]);

const round = createRound(deck);

describe('createRound', function() {
    it('should properly create the round object', function() {
        expect(round.deck.length).to.equal(3);
        expect(round.currentCard.id).to.equal(1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.equal(0);
    });
});

describe('takeTurn', function() {
    takeTurn('sea otter', round);
    takeTurn('spleen', round);
    
    it.skip('should properly track the number of turns taken', function() {
        expect(round.turns).to.equal(2);
    });

    it.skip('should properly track the number of incorrect guesses', function() {
        expect(round.incorrectGuesses).to.equal(1);
    });

    it.skip('should correctly update currentCard after a guess', function() {
        expect(round.currentCard.id).to.equal(12);
    });
});

describe('endRound', function() {
    it.skip('should', function() {
        

        expect().to.equal();
    });
});

describe('calculatePercentCorrect', function() {
    it.skip('should properly calculate the percent of correct guesses', function() {
        let percentCorrect = calculatePercentCorrect(round);

        expect(percentCorrect).to.equal(50);
    });
});