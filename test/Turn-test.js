const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn, cardOne

  beforeEach('Set up turn', () => {
    cardOne = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    turn = new Turn("object", cardOne);;
  })

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with a guess and a card', () => {
    expect(turn.guess).to.equal("object");
    expect(turn.card).to.equal(cardOne);
  });

  it('should have method returnGuess that returns guess', () => {
    let returnGuess = turn.returnGuess();
    expect(returnGuess).to.equal(turn.guess);
  });

  it('should have method returnCard that returns card', () => {
    let returnCard = turn.returnCard();
    expect(returnCard).to.equal(turn.card);
  });

  it('should have method evaluateGuess that can check if guess matches answer', () => {
    let evaluateGuess = turn.evaluateGuess();
    expect(evaluateGuess).to.equal(true);
  });

  it('should have method giveFeedback that returns incorrect or correct', () => {
    let giveFeedback = turn.giveFeedback();
    expect(giveFeedback).to.equal("correct!")
  });
})
