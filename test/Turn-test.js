const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  expect(card.id).to.equal(1);

  beforeEach(() => {
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 
  
  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('object')
  });

  it('should store what the current card in play is', function() {
    expect(turn.card).to.equal(card)
  });

  it('should have a method to return a user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('object')
  });

  it('should have a method to return the current card', function() {
    expect(turn.returnCard()).to.equal(card)
  });

});