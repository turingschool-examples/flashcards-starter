const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('guess');

    expect(turn.guess).to.equal('guess');
  });

  it('should store a Card object', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('object', card);

    expect(turn.card).to.deep.equal(card);
  });

  it('should return a guess', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('object', card);

    turn.returnGuess()

    expect(turn.returnGuess()).to.equal(turn.guess)
  });

  it('should return a card', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('object', card);

    turn.returnCard()

    expect(turn.returnCard()).to.deep.equal(card)
  });

  it('should be able to evaluate the guess', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true);
  }); 

  it('should be able to return false if the guess is wrong', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('function', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return either feedback after evaluating answer', function() {
    const card = new Card(1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object");

    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card);

    expect(turn2.giveFeedback()).to.equal('correct!');
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});