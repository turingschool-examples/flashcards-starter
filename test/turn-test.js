const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store a user\'s guess', function() {
    const turn = new Turn('I am a guess');
    expect(turn.guess).to.equal('I am a guess');
  });

  it('should be able to store the card object', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('I am a guess', card);
    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should be able to return the guess', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('I am a guess', card);
    expect(turn.returnGuess()).to.equal('I am a guess');
  });

  it('should be able to return the card', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('I am a guess', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to verify if the guess is correct', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('nine', card);
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('should be able to verify if the guess is incorrect', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('one', card);
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('should tell the user if the guess is correct', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('nine', card);
    expect(turn.answerFeedback()).to.deep.equal('Correct Answer!');
  });

  it('should tell the user if the guess is incorrect', function() {
    const card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const turn = new Turn('one', card);
    expect(turn.answerFeedback()).to.deep.equal('Close, but no cigar!');
  });
});

