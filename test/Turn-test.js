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

  it('should have 2 arguments, a string that represents the users guess, and the Card object for current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    expect(turn.guess).to.equal('array');
    expect(turn.currentCard).to.equal(card);
  });

  it('should have a method that returns the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnGuess()).to.equal('function');
  });

  it('should have a method that returns the current Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method that returns a boolean indicating if the users guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('function', card);
    expect(turn.evaluateGuess()).to.equal(false);

    turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns either "incorrect!" or "correct!" based on the guess of the user', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('function', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');

    turn = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('correct!');
  });
})
