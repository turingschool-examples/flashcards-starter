const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function () {

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    const card = new Card();
    const turn = new Turn(card, 'object')
    expect(turn.returnGuess()).to.equal('object')
  })

  it('should return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');

    turn.returnCard()
    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate the users answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');

    turn.evaluateGuess();
    
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('give feedback should return `correct` if evaluateGuess() returns true', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');

    turn.giveFeedback()
    expect(turn.giveFeedback()).to.equal('correct!')

  })

});