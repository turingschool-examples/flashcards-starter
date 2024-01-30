const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('guess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate whether an answer is correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess1 = 'object';
    const guess2 = 'banana';
    const correctGuess = evaluateGuess(guess1, card.correctAnswer);
    const incorrectGuess = evaluateGuess(guess2, card.correctAnswer);

    expect(correctGuess).to.equal('correct!');
    expect(incorrectGuess).to.equal('incorrect!');
  });
});