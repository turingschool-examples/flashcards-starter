const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });
  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceOf(Card);
  });

  it('should be able to store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should be able to store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should be able to store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});
