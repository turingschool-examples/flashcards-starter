const assert = require('chai').assert;

const Card = require('../src/Card');

describe('Card', function() {
  let card;
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })
  
  it('should be a function', function() {
    assert.typeOf(Card, 'function');
  });

  it('should be an instance of Card', function() {
    assert.instanceOf(card, Card);
  });

  it('should store a question', function() {
    assert.equal(card.question, 'What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of possible answers', function() {
    assert.deepEqual(card.answers, ['object', 'array', 'function']);
  });

  it('should store the correct answer', function() {
    assert.equal(card.correctAnswer, 'object');
  });
});
