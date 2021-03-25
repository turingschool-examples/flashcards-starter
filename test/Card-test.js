const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have an id', function() {
    const card = new Card();
    expect(card).to.have.property('id');
  });

  it('should be able to take an id', function() {
    const card = new Card(1);
    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    const card = new Card(1, 'favorite animal', ['cat', 'dog', 'bear'], 'cat');
    expect(card.question).to.equal('favorite animal');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'favorite animal', ['cat', 'dog', 'bear'], 'cat');
    expect(card.answers).to.deep.equal(['cat', 'dog', 'bear']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'favorite animal', ['cat', 'dog', 'bear'], 'cat');
    expect(card.correctAnswer).to.equal('cat');
  });
});
