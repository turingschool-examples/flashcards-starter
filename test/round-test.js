const chai = require('chai');
const expect = chai.expect;

const {createCard} = require('../src/card');
const {createDeck, countCards} = require('../src/deck');
const {evaluateGuess, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('Round', function() {
  let card1, card2, card3, card4, deck, round;
  beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        card4 = createCard(3, 'What is Bellamy\'s favorite snack?', ['club crackers', 'babybel cheese', 'blueberries'], 'club crackers');
        deck = createDeck([card1, card2, card3, card4]);
        round = createRound(deck);
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
            let guess = null;
    
            expect(evaluateGuess(guess, card4)).to.equal('Please choose a valid option!');
        });
    });
    
    describe('Create Round', function() {
        it('should create a round and its properties', function() {

            expect(round.deck).to.deep.equal([card1, card2, card3, card4]);
            expect(round.currentCard).to.deep.equal({
                     id: 1,
                     question: 'What is Robbie\'s favorite animal',
                     answers: ['sea otter', 'pug', 'capybara'],
                     correctAnswer: 'sea otter'
                   });
            expect(round.turns).to.equal(0);
            expect(round.incorrectGuesses).to.deep.equal([]);
        });
    });
    
    describe('Take Turn', function() {
        it('should return feedback if the guess for the round is correct', function() {
            let turn = takeTurn('sea otter', round);

            expect(turn).to.equal('Correct!');
        });
        
        it('should return feedback if the guess for the round is incorrect', function() {
            let turn = takeTurn('pug', round);

            expect(turn).to.equal('Incorrect!');
        });

        it('should record incorrect guesses', function() {
            let turn = takeTurn('capybara', round);

            expect(turn).to.equal('Incorrect!')
            expect(round.incorrectGuesses).to.deep.equal([1]);
        });

        it('should return feedback if the guess is invalid', function() {
            let invalidTurn = takeTurn(null, round);

            expect(invalidTurn).to.equal('Please choose a valid option!');
        });

        it('should count turns', function() {
            takeTurn('sea otter', round);

            expect(round.turns).to.equal(1);
        });

        it('should only count the turn if a valid answer choice is guessed', function() {
            takeTurn('sea otter', round);
            takeTurn(null, round);

            expect(round.turns).to.equal(1);
            expect(round.incorrectGuesses).to.deep.equal([])
        });

        it('should set the next card in the deck as the current card after a turn', function() {
            let turn1 = takeTurn('sea otter', round);
            let turn2 = takeTurn('spleen', round);
            let invalidTurn = takeTurn(null, round);
            let turn3 = takeTurn('Lex', round);

            expect(round.currentCard).to.deep.equal(card4)
            expect(turn3).to.equal('Incorrect!');
            expect(round.turns).to.equal(3);
            expect(round.incorrectGuesses).to.deep.equal([14, 12])
        });
    });
    
    describe('Calculate Percent Correct', function() {
        let turn1, turn2, invalidTurn, turn3, turn4;
        beforeEach(() => {
            turn1 = takeTurn('sea otter', round);
            turn2 = takeTurn('spleen', round);
            invalidTurn = takeTurn(null, round);
            turn3 = takeTurn('Lex', round);
            turn4 = takeTurn('club crackers', round);
    
        });

        it.skip('should return the percentage of correct guesses', function() {
            
            expect((calculatePercentCorrect(round))).to.equal(50);
        });
    });
    
    describe('End Round', function() {
        it.skip('should print the percentage of correct answers', function() {

            expect((endRound(round))).to.equal('**Round over!** You answered 50% of the questions correctly!');
        });
    
    });
});

