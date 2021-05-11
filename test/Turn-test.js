const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should take the user\'s guess as a string as an argument', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.be.a('string');
  });

  it.skip('should take the current card object as an argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(card).to.be.an.instanceof(Card);
  });

  it.skip('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it.skip('should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should return true if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it.skip('should return false if the guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should tell the user when they guess correctly', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it.skip('should tell the user when they guess incorrectly', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
