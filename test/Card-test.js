const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it.skip('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it.skip('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('guess', function() {
  it('should evaluate if a guess is correct and return correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    let guessResult = evaluateGuess(guess, card.correctAnswer);
    expect(guessResult).to.equal('correct');
  });

  it('should evaluate if a guess is incorrect and return incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array' || 'function';
    let guessResult = evaluateGuess(guess, card.correctAnswer);
    expect(guessResult).to.equal('incorrect');
  });
});