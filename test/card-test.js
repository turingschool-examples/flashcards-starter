const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it.skip('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it.skip('should create a card and it.skips properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('evaluateGuess', () =>{
  it.skip('should be a function',() => {
    expect(evaluateGuess).to.be.a('function');
  });

  it.skip('should evaluate a guess as correct or false', () => {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 1
    const guess1 = 0
    const evaluation = evaluateGuess(card.answers[guess], card.correctAnswer)
    const evaluation1 = evaluateGuess(card.answers[guess1], card.correctAnswer)

    expect(evaluation).to.equal('incorrect!')
    expect(evaluation1).to.equal('correct!')
  });
});
