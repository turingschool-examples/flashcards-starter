const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to accept a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.guess).to.equal('function');
  });

  it('should be able to accept a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    const returnGuess = turn.returnGuess();
    expect(returnGuess).to.equal('function');
  });

  it('should return a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    const returnCard = turn.returnCard();
    expect(returnCard).to.equal(card);
  });

  it('should evaluate a guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('function', card);
    const turn2 = new Turn('object', card);
    const evalTurn1 = turn1.evaluateGuess();
    const evalTurn2 = turn2.evaluateGuess();
    expect(evalTurn1).to.equal(false);
    expect(evalTurn2).to.equal(true);
  });

  it('should give feedback to the user about the guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('function', card);
    const turn2 = new Turn('object', card);
    const turn1Feedback = turn1.giveFeedback();
    const turn2Feedback = turn2.giveFeedback();
    expect(turn1Feedback).to.equal('Try again.');
    expect(turn2Feedback).to.equal("Great Job! You're a rockstar!");
  });
});



