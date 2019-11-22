const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('should return the guess', function() {
    const turn = new Turn('pug');
    expect(turn.returnGuess()).to.equal('pug')
  });
  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('lab', card);
    expect(turn.returnCard()).to.equal(card)
  });

  it('should return false if the guess doesnt match the answer', function() {
    const card = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return incorrect if the guess doesnt match the answer', function() {
    const card = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('incorrect');
  });
});