const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
let turn;
let turn1;
let turn2;
let card;
beforeEach(() => {
  card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
  turn = new Turn();
  turn1 = new Turn('object', card);
  turn2 = new Turn('array', card);
});

describe('Turn', function () {
  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function () {
    expect(turn1.returnGuess()).to.equal('object');
  });

  it('should have a method to return the card', function () {
    expect(turn1.returnCard()).to.equal(card);
  });

  it('should have a method that returns true or false for the guess', function () {
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns "incorrect" or "correct" on true or false', function () {
    expect(turn2.giveFeedback()).to.equal('incorrect!')
    expect(turn1.giveFeedback()).to.equal('correct!');
  });
});
