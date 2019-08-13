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
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should return guess', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should return card', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    // const results = turn.returnCard();

    expect(turn.returnCard()).to.equal(card)
  });

  it('should evaluate guess', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    // const results = turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', function() {
    const card = new Card();
    const turn = new Turn('guess', card);

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
});