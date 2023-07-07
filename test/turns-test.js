const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess', function() {
  it('should return "correct!" if the guess is correct', function() {
    const guess = 'object';
    const correctAnswer = 'object';
    const result = evaluateGuess(guess, correctAnswer);
    expect(result).to.equal('correct!');
  });

  it('should return "incorrect!" if the guess is incorrect', function() {
    const guess = 'array';
    const correctAnswer = 'object';
    const result = evaluateGuess(guess, correctAnswer);
    expect(result).to.equal('incorrect!');
  });
});
