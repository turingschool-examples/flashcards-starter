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

  it('should store the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    expect(turn.guess).to.equal('Is mayonnaise an instrument?');
  });

  it('should store the user card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    expect(turn.card).to.equal(card);
  });

  it('should have a method for returning the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should have a method for returning the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Is mayonnaise an instrument?', card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.card);
  });
});
