const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const testingData = require('../test/TestingData');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach( () => {
    turn = new Turn('Gary', card);
    trueTurn = new Turn('Gary', card);
    falseTurn = new Turn('George', card);
    card = new Card(testingData[1].id, testingData[1].question, testingData[1].answers, testingData[1].correctAnswer)
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a users guess', () => {
    expect(turn.userGuess).to.equal(testingData[1].correctAnswer);
  });

  it('should store a card', () => {
    expect(turn.card).to.deep.equal(card);
  });

  it('should return the users guess', () => {
    expect(turn.returnUserGuess()).to.equal(testingData[1].correctAnswer)
  });

  it('should return a card', () => {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the users guess', () => {
    expect(trueTurn.evaluateGuess()).to.equal(true);
    expect(falseTurn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback on card played', () => {
    expect(trueTurn.giveFeedback()).to.equal("correct!");
    expect(falseTurn.giveFeedback()).to.equal("incorrect!")
  });
});