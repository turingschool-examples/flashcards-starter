const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('Turn', function(){
    let card1;
    beforeEach(() => {
        card1 = ({
            id: 1,
            question: `What is Bellamy's favorite snack?`,
            answers: ['club crackers', 'babybel cheese', 'blueberries'],
            correctAnswer: 'club crackers'
        });
    });

    it('should be a function', function() {
        expect(evaluateGuess).to.be.a('function');
    });

    it('should give feedback if guess is correct', function() {
        let guess = 'club crackers';
        
        expect(evaluateGuess(guess, card1)).to.equal('Correct!');
    });

    it('should give feedback if guess is incorrect', function() {
        let guess = 'babybel cheese';

        expect(evaluateGuess(guess, card1)).to.equal('Incorrect!');
    });

    it('should notify user if invalid answer is guessed', function() {
        let guess = 'caviar';

        expect(evaluateGuess(guess, card1)).to.equal('Please choose a valid option!');
    });
})