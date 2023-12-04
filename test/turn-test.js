const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn.js');
const { createCard } = require('../src/card.js');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct if guess is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', 
    ['object', 'array', 'function'], 'object'); 
    const guess = card.answers[0];
    const correctAnswer = card.correctAnswer;
    const newGuess = evaluateGuess(guess, correctAnswer);

    expect(newGuess).to.equal('correct!');
  });

  it('should return incorrect if guess is incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', 
    ['object', 'array', 'function'], 'object'); 
    const guess = card.answers[1];
    const correctAnswer = card.correctAnswer;
    const newGuess = evaluateGuess(guess, correctAnswer);

    expect(newGuess).to.equal('incorrect!');
  });
});