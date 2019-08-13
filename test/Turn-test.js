const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card;
  let turn;

  beforeEach(() => {
    card = new Card({
      'id':1, 
      'question':'What allows you to define a set of related information using key-value pairs?', 
      'answers':['object', 'array', 'function'],
      'correctAnswer': 'object'});
    turn = new Turn('object',card)
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.eql({
      'id':1, 
      'question':'What allows you to define a set of related information using key-value pairs?', 
      'answers':['object', 'array', 'function'],
      'correctAnswer': 'object'});
  });

  it('should evaluate a guess', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

   it('should give feedback', function() {
    expect(turn.giveFeedback()).to.equal('correct!', 'incorrect!');
  });    

});