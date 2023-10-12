const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('Card', function() {
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

describe('Guess check', function() {
  it('should grade a guess', function() {
    const card = createCard(2, 'What is one of the 7 wonders of the world?', ['Colossus of Rhodes', 'Tower of London', 'Mt. Rainier'], 'Colossus of Rhodes');
    const correctGuess = evaluateGuess('Colossus of Rhodes', card.correctAnswer);
    const incorrectGuess = evaluateGuess('Mt. Rainier', 'Colossus of Rhodes');

    expect(correctGuess).to.deep.equal('correct!');
    expect(incorrectGuess).to.deep.equal('incorrect!');
  });
});