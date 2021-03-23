const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card1;
  let turn;
  beforeEach( function() {
    card1 = new Card(1, 'What is Anna\'s favorite animal', ['Donkey', 'Dog', 'Alpaca'], 'Dog');

    turn = new Turn('Donkey', card1);
  });
  it('should take in a guess and a card object', function() {

    expect(turn.guess).to.equal('Donkey');
    expect(turn.card).to.equal(card1);
  });

  it('should be able to return the guess', function() {
    expect(turn.returnGuess()).to.equal('Donkey');
  });

  it('should be able to return the card', function() {
    expect(turn.returnCard()).to.equal(card1);
  });

  it('should be able to check the guess and return if its true of false', function() {
    expect(turn.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('Dog', card1);

    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should be able to give feedback depending if the guess is correct', function() {
    const turn2 = new Turn('Dog', card1);

    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
