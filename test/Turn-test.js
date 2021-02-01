const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
    expect(turn).to.exist;
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a string for user guess and a card instance', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('array', card);

    expect(turn.guess).to.equal(card.correctAnswer)
  });

  it('should have a method returnGuess that returns the guess', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('array', card);

    turn.returnGuess();

    expect(turn.guess).to.equal('array');
  });

  it('should have a method returnCard that returns the card', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('array', card);

    turn.returnCard();

    expect(turn.card).to.equal(card);
  });

  it('should evaluate to true if the guess is correct', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate to false if the guess is not correct', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return positive feedback about correct guess', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('array', card);
    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('correct!');
  })

  it('should return negative feedback about incorrect guess', function() {
    const card = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'],
      'array');
    const turn = new Turn('object', card);
    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

})
