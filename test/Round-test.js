const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn, endRound, calculatePercentCorrect, getTimeElapsed } = require('../src/round');

const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const deck = createDeck(card1, card2, card3);

describe('createRound', function() {
    let round = createRound(deck);
    it('should properly create the round object', function() {
        expect(round.deck.length).to.equal(3);
        expect(round.currentCard.id).to.equal(1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses.length).to.equal(0);
        expect(round.startTime).to.exist;
    });
});

describe('takeTurn', function() {
    let round = createRound(deck);
    let feedback1 = takeTurn('sea otter', round);
    let feedback2 = takeTurn('spleen', round);
    
    it('should properly track the number of turns taken', function() {
        expect(round.turns).to.equal(2);
    });

    it('should properly track the number of incorrect guesses', function() {
        console.log(round.incorrectGuesses)
        expect(round.incorrectGuesses.length).to.equal(1);
    });

    it('should correctly update currentCard after a guess', function() {
        expect(round.currentCard.id).to.equal(12);
    });

    it('should return the correct feedback message when guess correctly', function() {
        expect(feedback1).to.equal('correct!');
    });

    it('should return the correct feedback message when guess incorrectly', function() {
        expect(feedback2).to.equal('incorrect!');
    });
});

describe('calculatePercentCorrect', function() {
    let round = createRound(deck);
    takeTurn('sea otter', round);
    takeTurn('spleen', round);

    it('should properly calculate the percent of correct guesses', function() {
        let percentCorrect = calculatePercentCorrect(round);

        expect(percentCorrect).to.equal(50);
    });
});

describe('endRound', function() {
    let round = createRound(deck);
    takeTurn('sea otter', round);
    takeTurn('spleen', round);
    takeTurn('playing with bubble wrap', round);
    
    it('should', function() {
        let endRoundMessage = endRound(round);

        expect(endRoundMessage).to.equal("** Round over! ** You answered 2 of the questions correctly!");
    });
});
