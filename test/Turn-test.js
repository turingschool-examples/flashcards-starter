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

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evalulate the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback on user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});
