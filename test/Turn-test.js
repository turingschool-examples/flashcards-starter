const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

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
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('apple', card);
    expect(turn.guess).to.equal('apple');
  });

  it('should take in a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('apple', card);
    expect(turn.card).to.equal(card);
  });

  it('the card taken in should be an instance of card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('apple', card);
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should be able to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('my guess', card);
    expect(turn.returnGuess()).to.equal('my guess');
  });

  it('should be able to return a card object passed in.', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('my guess', card);
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('should be able to return the actual card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('my guess', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to return a boolean if the guess matches the cards correctAnswer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('my guess', card);
    const turn2 = new Turn('object', card);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback based on the answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('my guess', card);
    const turn2 = new Turn('object', card);

    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
