const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card;

  beforeEach(() => {
    card = new Card({
       'id':1, 
      'question':'What allows you to define a set of related information using key-value pairs?', 
      'answers':['object', 'array', 'function'],
      'correctAnswer': 'object'});
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', () => {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
});