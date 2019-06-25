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

  it('should be able to accept a guess and a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.guess).to.equal('function')
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should return a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate a guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('function', card);
    const turn2 = new Turn('object', card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback to the user about the guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('function', card);
    const turn2 = new Turn('object', card);
    turn1.giveFeedback();
    turn2.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('Try again.');
    expect(turn2.giveFeedback()).to.equal("Great Job! You're a rockstar!");
  });
});



