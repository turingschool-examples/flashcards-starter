const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();

    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();

    expect(card).to.be.an.instanceof(Card);
  });

  it('should take an id for the first argument', function() {
    const card = new Card(1);

    expect(card.id).to.equal(1);
  });

  it('should only take a postive integer for the id', function() {
    const card = new Card(1);

    expect(card.id).to.be.above(0);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?')

    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should only take a string for the question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?')

    expect(card.question).to.be.a('string');
  });

it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should only take an array for the list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function']);

    expect(card.answers).to.be.an('array');
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.correctAnswer).to.equal('object');
  });

  it('should only take a string for the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.correctAnswer).to.be.a('string');
  })
});
