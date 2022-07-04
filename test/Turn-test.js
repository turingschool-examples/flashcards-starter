const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let firstTurn;
  let secondTurn;
  let card;

  beforeEach(() => {
    firstTurn = new Turn('object', card);
    secondTurn = new Turn('array', card);
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  });

  it('should be a function', () => {
      expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(firstTurn).to.be.an.instanceof(Turn);
  });

  it('should store the user\'s guess', () => {
    expect(firstTurn.guess).to.be.a('string');
    expect(firstTurn.guess).to.equal('object');
  });

  it('should store a current card in play as an object', () => {
    expect(firstTurn.card).to.be.an.instanceof(Card);
  });

  it('should return current player\'s guess', function() {
    firstTurn.returnGuess();

    expect(firstTurn.returnGuess()).to.equal(firstTurn.guess);
  });

  it('should return the player\'s card', function() {
    firstTurn.returnCard();

    expect(firstTurn.returnCard()).to.equal(firstTurn.card);
  });

  it('should evaluate if user\'s guess matches the correct answer on the card', function() {
    firstTurn.evaluateGuess();

    expect(firstTurn.evaluateGuess()).to.be.false;

    secondTurn.evaluateGuess();

    expect(secondTurn.evaluateGuess()).to.be.true;
  });

  it('should give feedback whether the guess is correct or not', function() {
    firstTurn.evaluateGuess();
    firstTurn.giveFeedback();

    expect(firstTurn.giveFeedback()).to.equal('incorrect!');

    secondTurn.evaluateGuess();
    secondTurn.giveFeedback();

    expect(secondTurn.giveFeedback()).to.equal('correct!');
  });
})