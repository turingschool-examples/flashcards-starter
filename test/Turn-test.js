const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn, card, guess;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    guess = 'object';
    turn = new Turn(guess, card);
  });
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });
  it('should return a player guess', function() {
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal(turn.guess);
  });
  it('should return the card being played', function() {
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });
  it('should evaluate player guess', function() {
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);

    const turn1 = new Turn('array', card);
    turn1.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(false);
  });
  it('should give appropriate feedback in correlation with evaluation', function() {
    turn.giveResult();

    expect(turn.giveResult()).to.equal('Correct!');

    const turn1 = new Turn('array', card);
    turn1.giveResult();

    expect(turn1.giveResult()).to.equal('Incorrect!');
  });

});