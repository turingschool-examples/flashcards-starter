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

  it('should evaluate if a guess to a flashcard question is correct or incorrect', function () {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let correctGuess = evaluateGuess("object", card.correctAnswer);
    let wrongGuess = evaluateGuess("array", card.correctAnswer);

    expect(correctGuess).to.equal('correct!');
    expect(wrongGuess).to.equal('incorrect!');
  });

  
});

//YOU CAN add tests to this file.
//YOU CAN also add more test files. 
//IF YOU DO, just make sure to import the new test files