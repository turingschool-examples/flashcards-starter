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
    expect(card.possibleAnswers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluate guess', function () {
  it('should evaluate if a guess is correct and should return correct if it is', function (){
    const correctGuess = evaluateGuess('correct answer', 'correct answer')

    expect(correctGuess).to.equal('Correct!')
  })

  it('should evaluate if a guess is incorrect and should return incorrect if it is', function (){
    const incorrectGuess = evaluateGuess('correct answer', 'incorrect answer')

    expect(incorrectGuess).to.equal('Incorrect!')
  })
})