const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');



describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should have a method called returnGuess', function() {
    const turn = new Turn('hi');
    expect(turn.returnGuess()).to.equal('hi')
  });

  it('should have a method called returnCard', function() {
    const card = new Card();
    const turn = new Turn('hi', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method called evaluateGuess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('hi', card);
    expect(turn.evaluateGuess('hi', card)).to.equal(false);
  });

  it('should return true if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess('object', card)).to.equal(true);
  });

  it('should have a method called giveFeedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card);
    expect(turn.giveFeedback('object', card)).to.equal('correct!');
  });

  it('should return incorrect if wrong', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('hi', card);
    expect(turn.giveFeedback('hi', card)).to.equal('incorrect!');
  });
});
