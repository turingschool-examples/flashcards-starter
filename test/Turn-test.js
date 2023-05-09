const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('evaluateGuess', function() {
    it('should return correct message when guessed correctly', function() {
        let guess = "object";
        let correctAnswer = "object";
        let message = evaluateGuess(guess, correctAnswer);
        
        expect(message).to.equal("correct!");
    });

    it('should return correct message when guessed incorrectly', function() {
        let guess = "object";
        let correctAnswer = "string";
        let message = evaluateGuess(guess, correctAnswer);
        
        expect(message).to.equal("incorrect!");
    })
});