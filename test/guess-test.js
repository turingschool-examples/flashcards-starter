const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/guess');

describe('guess', () => {
  it('should be a function', function () {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should check to see if the guess is correct', () => {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const guess = 'object';
    let guessResult = evaluateGuess(guess, card.correctAnswer);

    expect(guessResult).to.equal('Correct');
  });

  it('should check to see if the guess is incorrect', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    const guess = 'array' || 'function';
    let guessResult = evaluateGuess(guess, card.correctAnswer);

    expect(guessResult).to.equal('Incorrect');
  });
});
