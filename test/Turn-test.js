const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function() {

  it('should be a function', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.guess).to.equal('guess');
  });

  it('should store a card', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.card).to.equal(card);
  });

  it('should have a default guess status of false', function() {
    const card = new Card();
    const turn = new Turn('guess', card);
    expect(turn.guessStatus).to.equal(false);
  });

  it('should change guess status to true when the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.guessStatus).to.equal(true);
  });


  it('should return incorrect when the guess is wrong', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should return correct when the guess is right', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return the guess', function() {
    const card = new Card();
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(turn.card);
  });


});
