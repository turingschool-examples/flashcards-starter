const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card1 = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
    //card2
    //card3
  });
  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card1).to.be.an.instanceOf(Card);
  });

  it('should be able to store a question', function() {
    expect(card1.question).to.equal('An object allows you to define a set of related information using what kind of pairs?');
  });

  it('should be able to store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['object-subject', 'key-value', 'index-array']);
  });

  it('should be able to store the correct answer', function() {
    expect(card1.correctAnswer).to.equal('key-value');
  });
});
