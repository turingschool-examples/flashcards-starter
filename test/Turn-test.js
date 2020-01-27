const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('Turn should be instantiated with a Guess and a Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be a function with a guess and a Card', function() {
    const turn = new Turn();
    const card = new Card();
  });

  it('should return the players guess', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn('array', card);
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should return the card', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate the guess', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give feedback', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('Try again...')
  })
});
