const cards = require('../src/data')
const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess} = require('../src/card');

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
  
  it('should evaluate if a guess is correct or incorrect', function() {
    const correctGuess = evaluateGuess('correct answer', 'correct answer')
    const wrongGuess = evaluateGuess('correct answer', 'incorrect answer')

    expect(correctGuess).to.equal('Correct!')
    expect(wrongGuess).to.equal('Incorrect!')
  })
  
 
});