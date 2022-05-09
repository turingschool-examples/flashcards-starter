const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  it('should be a function', () => {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});