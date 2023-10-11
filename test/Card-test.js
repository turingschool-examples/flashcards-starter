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

describe('evaluateGuess', function() {
  it('should evaluate if the guess is correct', function() {
    const card = createCard(2, 'What animal is a lion?', ['cow', 'lion', 'duck', 'pigeon'], 'lion');

    expect(card, 'Correct!')
  });

  it('should evaluate if the guess is incorrect', function() {
    const card2 = createCard(3, 'How was the 90s surfer', ['sad', 'angry', 'bodacious', 'crass'], 'angry');

    expect(card2, 'Incorrect!')
  });
});