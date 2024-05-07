const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { beforeEach } = require('mocha');

describe('card', function() {
  it('should be a function', function(){
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  

  it('should create another card and different properties', () => {
    const card = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
  
    expect(card.id).to.equal(2);
    expect(card.question).to.equal('What is a comma-separated list of related values?');
    expect(card.answers).to.deep.equal(['array', 'object', 'function']);
    expect(card.correctAnswer).to.equal('array')
  });

});

describe('Guess', ()=> {
  it('Should have a guess that matches the correct answer and returns "correct!" ', () => {
    var result = evaluateGuess('answer', 'answer')

    expect(result).to.equal('Correct!')
  })
})

describe('Guess', ()=> {
  it('Should have a guess that matches the correct answer and returns "Incorrect!" ', () => {
    var result = evaluateGuess('wrongAnswer', 'correctAnswer')

    expect(result).to.equal('Incorrect!')
  })
})
