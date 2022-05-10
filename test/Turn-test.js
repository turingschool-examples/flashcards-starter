const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn;
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn;
    expect(turn).to.be.a.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('banana');
    expect(turn.guess).to.equal('banana');
  });

  it('should store a different guess', function() {
    const turn = new Turn('tinfoil');
    expect(turn.guess).to.equal('tinfoil');
  });

  it('should store the current card in play', function() {
    const card = new Card(1, 'How many mates will a seahorse have in a lifetime?', ['one', 'as many as possible', 'none'], 'one');
    const turn = new Turn('one', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the current guess', function() {
    const card = new Card(1, 'How many mates will a seahorse have in a lifetime?', ['one', 'as many as possible', 'none'], 'one');
    const turn = new Turn('one', card);
    expect(turn.returnGuess()).to.equal('one');
  });

  it('should be able to return the current card', function() {
    const card = new Card(1, 'How many mates will a seahorse have in a lifetime?', ['one', 'as many as possible', 'none'], 'one');
    const turn = new Turn('one', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if the guess is correct', function() {
    const card = new Card(2, 'How many hours a day can an adult panda spend eating?', ['two', 'twenty-four', 'twelve'], 'twelve');
    const turn = new Turn('twelve', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the guess is incorrect', function() {
    const card = new Card(2, 'How many hours a day can an adult panda spend eating?', ['two', 'twenty-four', 'twelve'], 'twelve');
    const turn = new Turn('twenty-four', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });
})
