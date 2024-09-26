const chai = require('chai');
const expect = chai.expect;

const { createDeck} = require('../src/deck');
const { createCard} = require('../src/card');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('', function() {
    let card1, card2, card3, deck, round;
    beforeEach(function() {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = createDeck([card1, card2, card3]);
        round = createRound(deck);
    });

    describe('round', function() {
        it('should create a round with its properties', function() {
            expect(round.deck).to.deep.equal(deck);
            expect(round.currentCard).to.deep.equal(card1);
            expect(round.turns).to.equal(0);
            expect(round.incorrectGuesses).to.deep.equal([]);
        });
    });
    
    describe('turn', function() {
        it('should update turns counter', function() {
            const rightGuess1 = 'sea otter';
            const wrongGuess2 = 'spleen';
    
            takeTurn(rightGuess1, round);
            expect(round.turns).to.equal(1);
    
            takeTurn(wrongGuess2, round);
            expect(round.turns).to.equal(2);
        });
    
        it('should update current card', function() {
            const rightGuess1 = 'sea otter';
            const wrongGuess2 = 'spleen';
    
            takeTurn(rightGuess1, round);
            expect(round.currentCard).to.equal(card2);
    
            takeTurn(wrongGuess2, round);
            expect(round.currentCard).to.equal(card3);
        })
    
        it('should store incorrect guesses', function() {
            const wrongGuess1 = 'pug';
            const wrongGuess2 = 'spleen';
            const rightGuess3 = 'Fitzgerald';
    
            takeTurn(wrongGuess1, round);
            expect(round.incorrectGuesses).to.deep.equal([1]);
    
            takeTurn(wrongGuess2, round);
            expect(round.incorrectGuesses).to.deep.equal([1, 14]);
    
            takeTurn(rightGuess3, round)
            expect(round.incorrectGuesses).to.deep.equal([1, 14]);
        });
    
        it('should give feedback on correct answer', function() {
            const guess = 'sea otter';
    
            const goodResult = takeTurn(guess, round);
    
            expect(goodResult).to.equal('correct!');
        });
    
        it('should give feedback on incorrect answer', function() {
            const guess = 'pug';
    
            const badResult = takeTurn(guess, round)
    
            expect(badResult).to.equal('incorrect!');
        });
    });
    
    describe('percent', function() {
        it('should calculate percentage of correct guesses', function() {
            const wrongGuess1 = 'pug';
            const rightGuess2 = 'gallbladder';
            const rightGuess3 = 'Fitzgerald';
    
            takeTurn(wrongGuess1, round);
            expect(calculatePercentCorrect(round)).to.equal(0);
    
            takeTurn(rightGuess2, round);
            expect(calculatePercentCorrect(round)).to.equal(50);
    
            takeTurn(rightGuess3, round)
            expect(calculatePercentCorrect(round)).to.equal(67);
        });
    });
})
