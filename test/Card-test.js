const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const testCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');


describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(testCard.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    expect(testCard.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    expect(testCard.correctAnswer).to.equal('object');
  });
});