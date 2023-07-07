const chai = require('chai');
const expect = chai.expect;

const {  evaluateGuess } = require('../src/turn');


describe('turn', function () {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct if guess is correct', function() {
    const guess = true;
    const correctAnswer = true;

    const checkAnswer = evaluateGuess(guess, correctAnswer);

    expect(checkAnswer).to.equal('correct!');
  });

  it('should return incorrect if guess is not correct', function() {
    const guess = true;
    const correctAnswer = false;

    const checkAnswer = evaluateGuess(guess, correctAnswer);

    expect(checkAnswer).to.equal('incorrect!');
  });

});
