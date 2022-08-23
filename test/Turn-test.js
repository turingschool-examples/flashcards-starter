const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', () => {

  let currentCard;
  let turn;
  let turn2;

  beforeEach(() => {
    currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', currentCard);
    turn2 = new Turn('array', currentCard);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a user guess and the current card in play', () => {
    expect(turn.guess).to.equal('object');
    expect(turn.currentCard).to.equal(currentCard);
  });

  it('should return the user guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(currentCard);
  });

  it('should be able to evaluate whether a user guess is corret or incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to give a user feedback on their guess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
