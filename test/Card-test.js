const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?',
     ['object', 'array', 'function'], 'object');
     
     expect(card1.id).to.equal(1);
     expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
     expect(card1.answers).to.deep.equal(['object', 'array', 'function']);
     expect(card1.correctAnswer).to.equal('object');
    });  
  
  it('should create a different card and its properties', function() {
    const card2 = createCard(2, 'What is my favorite data type?',
     ['object', 'array', 'function'], 'function');
     expect(card2.id).to.equal(2);
     expect(card2.question).to.equal('What is my favorite data type?');
     expect(card2.answers).to.deep.equal(['object', 'array', 'function']);
     expect(card2.correctAnswer).to.equal('function');
    });  
});