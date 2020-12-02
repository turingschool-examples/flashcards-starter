const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn; //should i/ how do i add more instances when using beforeEach?
  let card;

  beforeEach(function() {
    turn = new Turn('object', card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able take the user\'s guess as an argument', () => {
    expect(turn).to.have.property('userGuess');
  });

  it('should be able to take in an instance of Card', () => {
    expect(turn).to.have.property('card');
  });

  it('should be able to return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should be able to return the Card instance', () => {
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should return a value of true if the user\'s guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return a value of true if the user\'s guess is correct', () => {
    expect(turn.giveFeedback()).to.equal("Correct!");
  });
});
