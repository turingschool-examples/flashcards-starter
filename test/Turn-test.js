
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

it('should store the user guess as a string', function() {
  const turn = new Turn('guess');
  expect(turn.guess).to.equal('guess');
});

it('should store a card object for the current card in play', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('guess', card);
  expect(turn.card).to.deep.equal(card);
});

it('should have a method that returns the guess', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('guess', card);
  expect(turn.returnGuess()).to.equal('guess');
});

it('should have a method that returns the card', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = new Turn('guess', card);
  expect(turn.returnCard()).to.equal(card);
});

it('should have a method that returns a boolean if the guess matches the answer', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turnOne = new Turn('guess', card);
  const turnTwo = new Turn('object', card);
  expect(turnOne.evaluateGuess()).to.equal(false);
  expect(turnTwo.evaluateGuess()).to.equal(true);
});

it('should have a method that returns a correct/incorrect if the guess matches the answer', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turnOne = new Turn('guess', card);
  const turnTwo = new Turn('object', card);
  expect(turnOne.giveFeedback()).to.equal('incorrect!');
  expect(turnTwo.giveFeedback()).to.equal('correct!');
});
});
