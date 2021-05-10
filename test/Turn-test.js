const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be instantiated with the usersGuess as the first parameter, and it should be a string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.guess).to.be.string;
  });

  it('should be instantiated a second argument, which is the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.cardInPlay).to.eql(card);
  });

  it('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const userGuess = turn.returnGuess()
    expect(userGuess).to.equal('object');
  });

  it('should return the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.eql(card);
  });

  it('should return true if the users guess matches the correct answer', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const evaluation = turn.evaluateGuess();
    expect(evaluation).to.be.true;
  });

  it('should return false if the users guess matches the correct answer', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('potato', card);
    const evaluation = turn.evaluateGuess();
    expect(evaluation).to.be.false;
  });

  it('should return Correct! if the users answer matches', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const feedback = turn.giveFeedback();
    expect(feedback).to.be.equal('Correct!');
  });

  it('should return Incorrect! if the users answer does not match the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('potato', card);
    const feedback = turn.giveFeedback();
    expect(feedback).to.be.equal('Correct!');
  });


});
