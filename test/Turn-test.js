const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card1;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('function', card1);
  });

  it('should be a function', function() {
    turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have 2 arguments, a string that represents the users guess, and the Card object for current card in play', function() {
    expect(turn.guess).to.equal('function');
    expect(turn.currentCard).to.equal(card1);
  });

  it('should have a method that returns the users guess', function() {
    expect(turn.returnGuess()).to.equal('function');
  });

  it('should have a method that returns the current Card', function() {
    expect(turn.returnCard()).to.equal(card1);
  });

  it('should have a method that returns a boolean indicating if the users guess matches the correct answer on the card', function() {
    let turn1 = new Turn('function', card1);
    expect(turn1.evaluateGuess()).to.equal(false);

    let turn2 = new Turn('object', card1);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns either "incorrect!" or "correct!" based on the guess of the user', function() {
    let turn1 = new Turn('function', card1);
    expect(turn1.giveFeedback()).to.equal('incorrect!');

    let turn2 = new Turn('object', card1);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
})
