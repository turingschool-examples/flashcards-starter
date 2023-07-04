const chai = require('chai');
const expect = chai.expect;

const { 
  createCard,
  evaluateGuess 
} = require('../src/card');

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
  
  it('should create another card and its properties', function() {
    const cardTwo = createCard(2, 'What is a comma-separated list of related values?',["array", "object", "function"], 'array');

    expect(cardTwo.id).to.equal(2);
    expect(cardTwo.question).to.equal('What is a comma-separated list of related values?');
    expect(cardTwo.answers).to.deep.equal(["array", "object", "function"]);
    expect(cardTwo.correctAnswer).to.equal('array')
  })
});

describe('turn', function() {
  it('should return correct! when the guess is correct', function() {
    const guess = 'sea otter';
    const correctAnswer = 'sea otter';
    const turn = evaluateGuess(guess, correctAnswer)

    expect(turn).to.equal(true)
  });

  it('should return incorrect! when the guess is incorrect', function() {
    const guess = 'pug';
    const correctAnswer = 'sea otter';
    const turn = evaluateGuess(guess, correctAnswer)

    expect(turn).to.equal(false)
  })
})