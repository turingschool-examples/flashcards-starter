const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  });

it('should store a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.equal(card);
});

it('should return the guess of the user', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  turn.returnGuess();
  expect(turn.guess).to.equal('object');
});

it('should return the current Card', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  turn.returnCard();
  expect(turn.card).to.equal(card);
});

it('should evaluate guess to check if correct', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  //console.log(turn.card)
  turn.evaluateGuess();
  expect(turn.evaluateGuess()).to.equal(true);
});

it('should evaluate guess to check if incorrect', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('array', card);
  turn.evaluateGuess();
  expect(turn.evaluateGuess()).to.equal(false);
});

it('should tell if correct', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('object', card);
  turn.giveFeedback();
  expect(turn.giveFeedback()).to.equal("correct!")
});

it('should tell if incorrect', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('array', card);
  turn.giveFeedback();
  expect(turn.giveFeedback()).to.equal("incorrect!")
});


})
