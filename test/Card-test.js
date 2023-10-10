const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function')
  })
});

describe('evaluateGuess', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return correct! for a correct guess', function() {
    const guess = 'object';
    const correctAnswer = 'object';
    expect(evaluateGuess(guess, correctAnswer)).to.equal('correct!');
  });

  it('should return incorrect! for an incorrect guess', function() {
    const guess = 'array';
    const correctAnswer = 'object';
    expect(evaluateGuess(guess, correctAnswer)).to.equal('incorrect!');
  });
});
});