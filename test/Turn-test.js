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
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn('User Guess', 'object');
    expect(turn.userGuess).to.equal('User Guess');
  });  

  it('should store an object of the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('User Guess', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should be a method that returns the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('User Guess', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should be a method that returns the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('User Guess', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('should return a boolean indicating if user guess matches card correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('User Guess', card);

    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return correct if the guess was correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'User Guess');
    const turn = new Turn('User Guess', card);

    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return incorrect if the guess was not correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'User Guess');
    const turn = new Turn('Not User Guess', card);

    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

});