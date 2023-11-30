const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/Card');

describe('card', function() {
  let card;

  beforeEach(function() {
    card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe('evaluateGuess', function() {
  let card;

  beforeEach(function() {
    card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct if guess is correct', function() {
    const guess = 'object';
    const feedback = evaluateGuess(guess, card.correctAnswer);
    expect(feedback).to.equal('correct!');
  });

  it('should return incorrect if guess is incorrect', function() {
    const guess = 'array';
    const feedback = evaluateGuess(guess, card.correctAnswer);
    expect(feedback).to.equal('incorrect!');
  });
});
