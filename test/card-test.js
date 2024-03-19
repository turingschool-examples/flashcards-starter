const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card');
const { it, describe } = require('mocha');

describe('card', function() {
  it.skip('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it.skip('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  }); 
  it.skip('should create a different card', function() {
    const card = createCard(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')

    expect(card.id).to.equal(2);
    expect(card.question).to.equal('What is a comma-separated list of related values?');
    expect(card.answers).to.deep.equal(["array", "object", "function"]);
    expect(card.correctAnswer).to.equal('array');
  })
});
