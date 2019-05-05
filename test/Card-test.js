const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function () {

  it('should be a function', function () {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of the Card class', function () {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should give each instance an id number', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    expect(card.id).to.equal(1);
  });

  it('should store the card\'s question', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should store a list of strings that represent multiple choice answers', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store a string that represents the correct answer', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});