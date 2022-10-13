const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card, card1

  beforeEach(() => {
    card = new Card();
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store the correct answer', function() {
    expect(card1.correctAnswer).to.equal('object');
  });
});
