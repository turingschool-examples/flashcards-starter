const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate to correct if the user guess is correct', function() {
    let guess = 'object';
    let correctAnswer = 'object';
    eval = evaluateGuess(guess, correctAnswer);

    expect(eval).to.equal('correct!')
  });

  it('should evaluate to incorrect if the user guess is incorrect', function() {
    let guess = 'function';
    let correctAnswer = 'object';
    eval = evaluateGuess(guess, correctAnswer);

    expect(eval).to.equal('incorrect!');
  })
});