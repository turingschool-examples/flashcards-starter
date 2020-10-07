const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(function() {
    card = new Card(1, 'What is Harry Potter\'s patronus', ['horse', 'otter', 'stag'], 'stag');
    turn = new Turn('stag', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take the user guess as the first argument', function() {
    expect(turn.guess).to.equal('stag');
  });

  it('guess argument should be a string', function() {
    expect(turn.guess).to.be.a('string');
  });

  it('should take a Card object as the second argument', function() {
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the guess', function() {
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('stag');
  });

  it('should return the current card', function() {
    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate an incorrect guess', function() {
    const turn = new Turn('otter', card);
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to evaluate a correct guess', function() {
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to give incorrect answer feedback', function() {
    const turn = new Turn('otter', card);
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should be able to give correct answer feedback', function() {
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('correct!');
  });
})
