const chai = require('chai');
const expect = chai.expect;
const { createCard, evaluateGuess } = require('../src/card');
const { it, describe } = require('mocha');

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
  it('should create a different card', function() {
    const card = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

    expect(card.id).to.equal(2);
    expect(card.question).to.equal('What is a comma-separated list of related values?');
    expect(card.answers).to.deep.equal(["array", "object", "function"]);
    expect(card.correctAnswer).to.equal('array');
  })
});
describe('turn', function() {
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function')
  });
  it('should evaluate the correct answer', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object'
    const correctAnswer = card.correctAnswer

    const result = evaluateGuess(guess, correctAnswer)

    expect(result).to.equal('correct')
    //we expect the function to equal to a string
  });

  it('should evaluate the incorrect answer', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array'
    const correctAnswer = card.correctAnswer

    const result = evaluateGuess(guess, correctAnswer)

    expect(result).to.equal('incorrect')
  });
  it('should evaluate the a different incorrect answer', function(){
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'function'
    const correctAnswer = card.correctAnswer

    const result = evaluateGuess(guess, correctAnswer)

    expect(result).to.equal('incorrect')
  });
})
