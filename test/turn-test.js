const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('Turn', function(){
    it.skip('should be a function', function() {
        expect(evaluateGuess).to.be.a('function');
    });

    it.skip('should give feedback if guess is correct', function() {
        let card;
        beforeEach(() => {
            card = {
                id: 1,
                question: `What is Bellamy's favorite snack?`,
                answers: ['club crackers', 'babybel cheese', 'blueberries'],
                correctAnswer: 'club crackers'
            };
        });
        let guess = 'club crackers';
        
        expect(evaluateGuess(guess, 'club crackers')).to.equal('Correct!');
    });

    it.skip('should give feedback if guess is incorrect', function() {
        let guess = 'babybel cheese';

        expect(evaluateGuess(guess, 'club crackers')).to.equal('Incorrect!');
    });

    it.skip('should notify user if invalid answer is guessed', function() {
        let guess = 'caviar';

        expect(evaluateGuess(guess, 'club crackers')).to.equal('Please choose a valid option!');
    });
})