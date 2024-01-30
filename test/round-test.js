const chai = require('chai');
const expect = chai.expect;

const {createCard} = require('../src/card');
const {createDeck} = require('../src/deck');
const {evaluateGuess, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('Round', function() {
  let card1, card2, card3, card4, deck, round;
  beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        card4 = createCard(3, 'What is Bellamy\'s favorite snack?', ['club crackers', 'babybel cheese', 'blueberries'], 'club crackers');
        // deck = createDeck([card1, card2, card3]);
        // round = createRound(deck);
    });

    describe('Evaluate Guess', function(){

        it('should be a function', function() {
            expect(evaluateGuess).to.be.a('function');
        });
    
        it('should give feedback if guess is correct', function() {
            let guess = 'club crackers';
            
            expect(evaluateGuess(guess, card4)).to.equal('Correct!');
        });
    
        it('should give feedback if guess is incorrect', function() {
            let guess = 'babybel cheese';
    
            expect(evaluateGuess(guess, card4)).to.equal('Incorrect!');
        });
    
        it('should notify user if invalid answer is guessed', function() {
            let guess = 'caviar';
    
            expect(evaluateGuess(guess, card4)).to.equal('Please choose a valid option!');
        });
    });
    
    describe('Create Round', function() {
        it.skip('should create a round and its properties', function() {
    
            expect(round.deck).to.deep.equal([card1, card2, card3]);
            expect(round.currentCard).to.deep.equal({
                     id: 1,
                     question: 'What is Robbie\'s favorite animal',
                     answers: ['sea otter', 'pug', 'capybara'],
                     correctAnswer: 'sea otter'
                   });
            expect(round.turns).to.equal(1);
            expect(round.incorrectGuesses).to.deep.equal([]);
        });
    });
    
    describe('Take Turn', function() {
        
    });
    
    describe('Calculate Percent Correct', function() {
    
    });
    
    describe('End Round', function() {
    
    });
});

