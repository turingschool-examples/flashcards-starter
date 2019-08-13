const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

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
  const card = new Card()
  const turn = new Turn('My Guess', card);
  expect(turn.guess).to.equal('My Guess');
});  

it('should store a card', function() {
  const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  const turn = new Turn('My Guess', card);
  expect(turn.card).to.deep.equal(card);
}); 

it('be able to return a guess', function () {
  const card1 = new Card(1, 'Question', ['answers'], 'correct')
  const turn = new Turn('attempt1', card1);
  expect(turn.returnGuess()).to.equal(turn.guess);
});

it('be able to return a card', function () {
  const card1 = new Card(1, 'Question', [''], 'correct')
  const turn = new Turn('attempt1', card1);
  let testCard = turn.returnCard();
  expect(testCard).to.equal(turn.card);
});

it('be able to evaluate a guess', function () {
  const card = new Card(1, 'Question?', ['answer1', 'answer2'], 'correct')
  const turn1 = new Turn('incorrect', card);
  const turn2 = new Turn('correct', card);
  expect(turn1.evaluateGuess()).to.equal(false);
  expect(turn2.evaluateGuess()).to.equal(true);
});

it('be able to evaluate a guess', function () {
  const card = new Card(1, 'Question?', ['answer1', 'answer2'], 'correct')
  const turn1 = new Turn('incorrect', card);
  const turn2 = new Turn('correct', card);
  expect(turn1.giveFeedback()).to.equal('Incorrect!');
  expect(turn2.giveFeedback()).to.equal('Correct!');
});


});