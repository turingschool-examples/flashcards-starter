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
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should return guess', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should return card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(card)
  });

  it('should evaluate guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object');
    const turn = new Turn('guess', card);

    turn.evaluateGuess();
  
    expect(turn.evaluateGuess()).to.equal(true);

  });

  it('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object');
    const turn = new Turn('guess', card);

    expect(turn.giveFeedback()).to.equal('Correct!');
  });
});