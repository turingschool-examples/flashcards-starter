const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn happy path', function() {
  let turn;
  let card;
  beforeEach(function() {
    turn = new Turn('object', card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('object');
  });

  it('should return a user\'s guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should store a card as an object', function() {
    expect(turn.card).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.deep.equal({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
  });

  it('should return a boolean indicating if the user\'s guess matches the correct answer on the card', function() {
    expect(turn.evaluateGuess()).to.equal(true || false);
  });

  it('should return true if the user\'s guess matches the correct answer on the card', function() {
    
    turn.evaluateGuess(); 

    expect(turn.evaluation).to.equal(true);
  });

  it('should give feedback on whether the guess is correct or not', function() {

    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('correct' || 'incorrect');
  });

});

describe('Turn sad paths', function() {
  let turn;
  let card;
  beforeEach(function() {
    turn = new Turn('array', card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should return false if the user\'s guess does not match the correct answer on the card', function() {
    expect(turn.evaluation).to.equal(false);
  });
});