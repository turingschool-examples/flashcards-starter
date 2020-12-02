const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
  });
  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceOf(Card);
  });

  it('should be able to store a question', function() {
    expect(card.question).to.equal('An object allows you to define a set of related information using what kind of pairs?');
  });

  it('should be able to store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object-subject', 'key-value', 'index-array']);
  });

  it('should be able to store the correct answer', function() {
    expect(card.correctAnswer).to.equal('key-value');
  });
});
