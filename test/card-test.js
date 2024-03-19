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

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  })
  it('should return correct when guess is correct', function() {
    const guess = "array"
    const correctAnswer = "array"
    const result = evaluateGuess(guess, correctAnswer)
    expect(result).to.equal('Correct!')
  })
  it('shoudl return incorrect if the guess is not the correct answer', function() {
    const guess = "object"
    const correctAnswer = "array"
    const result = evaluateGuess(guess, correctAnswer)
    expect(result).to.equal("Incorrect :(")
  })
})
