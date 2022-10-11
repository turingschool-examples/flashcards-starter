const chai = require('chai');
const expect = chai.expect;
const data = {
  id: 1, 
  question: 'What allows you to define a set of related information using key-value pairs?', 
  answers: ['object', 'array', 'function'], 
  correctAnswer: 'object'
}

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card(data);
    
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card(data);

    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const card = new Card(data);

    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(data);

    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(data);

    expect(card.correctAnswer).to.equal('object');
  });
});