const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, guess, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Joe\'s favorite color?', ['orange', 'purple', 'yellow', 'red'], 'orange');
    guess = 'purple';
    turn = new Turn(guess, card);
  });

  it('should create a new instance of Turn', () => {
    expect(turn).to.be.instanceOf(Turn);
  });

  it('should take in a user guess', () => {
    expect(turn.guess).to.equal(guess);
  });

  it('should take in a Card object for the current card in play', () => {
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', () => {
    expect(turn.returnGuess()).to.equal(guess);
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should check if the user guess is correct', () => {
    expect(turn.evaluateGuess()).to.equal(false);
    turn.guess = 'orange';
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback based on whether the guess is correct or not', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!');
    turn.guess = 'orange';
    expect(turn.giveFeedback()).to.equal('correct!');
  });


});