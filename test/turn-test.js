const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('guess', function() {
    it('should be a function', function() {
        expect(evaluateGuess).to.be.a('function');
    });

    it('should return correct if the guess is the same as the correct answer', function() {
        var correctAnswer = 'bear';
        var newGuess = evaluateGuess('bear', correctAnswer);

        expect(newGuess).to.equal('Correct!');
    });

    it('should return incorrect if the guess is not the same as the correct answer', function() {
        var correctAnswer = 'bear';
        var newGuess = evaluateGuess('seal', correctAnswer);

        expect(newGuess).to.equal('Incorrect!');
    });
});