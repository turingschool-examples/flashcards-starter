const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return the player\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should be able to return the player\'s card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should know if the player\'s guess is the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('blue', card);
    expect(turn.evaluateGuess()).to.equal(false);
    turn.guess = 'object';
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should say if the answer was correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('blue', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
    turn.guess = 'object';
    expect(turn.giveFeedback()).to.equal('Correct!');
  })
})

module.exports = Turn;
