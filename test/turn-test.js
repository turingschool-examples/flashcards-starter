const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { createCard } = require('../src/card');

describe('turn', function() {
    it('should be a function', function() {
        expect(evaluateGuess).to.be.a('function');
    });

    it('should return correct if user\'s guess is correct', function() {
        const card = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")

        expect(evaluateGuess(card.correctAnswer, 'array')).to.equal('correct!');
    });

    it('should return incorrect if user\'s guess is incorrect', function() {
        const card = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")

        expect(evaluateGuess(card.correctAnswer, 'object')).to.equal('incorrect!');
        expect(evaluateGuess(card.correctAnswer, 'function')).to.equal('incorrect!');
    });
});