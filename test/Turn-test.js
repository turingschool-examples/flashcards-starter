const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a turn', function() {
    const card = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn = new Turn('guess', card);

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should return the guess of the user', function() {
    const card = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn = new Turn('guess', card);

    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the card', function() {
    const card = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn = new Turn('guess', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the user guess is correct', function() {
    const card1 = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn1 = new Turn('Gaggle', card1);

    expect(turn1.evaluateGuess()).to.equal(false);

    const card2 = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn2 = new Turn('Pickle', card2);

    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback whether user guess is correct or incorrect', function() {
    const card1 = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn1 = new Turn('Pickle', card1);

    expect(turn1.giveFeedback()).to.equal('Correct! Great job!');

    const card2 = new Card(1, 'What is a group of hedgehogs known as?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    const turn2 = new Turn('Gaggle', card2);

    expect(turn2.giveFeedback()).to.equal('Ope! Incorrect!');
  });
});
