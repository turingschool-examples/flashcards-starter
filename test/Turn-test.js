
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be instantiated with two arguments', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('blue crane', card);
    expect(turn.guess).to.equal('blue crane');
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('blue crane', card);
    expect(turn.returnGuess()).to.equal('blue crane');
  });

  it('should return the card', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('blue crane', card);
    expect(turn.returnCard()).to.equal(turn.card)
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('should return a boolean indicating if the users guess is CORRECT', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('blue crane', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return a boolean indicating if the users guess is INCORRECT', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('secretary bird', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return an appropriate message if the users answer was CORRECT', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('blue crane', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should return an appropriate message if the users answer was INCORRECT', function() {
    const card = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const turn = new Turn('secretary bird', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});