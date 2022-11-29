const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, turnOne, turnTwo;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turnOne = new Turn('This is my guess', card);
    turnTwo = new Turn('object', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turnOne).to.be.an.instanceof(Turn);
  });

  it('should accept a user\'s guess', function() {
    expect(turnOne.userGuess).to.equal('This is my guess');
  });

  it('should contain a card object', function() {
    expect(turnOne.currentCard).to.equal(card);
  });

  it('should be able to return the user\'s guess', function() {
    turnOne.returnGuess();
    expect(turnOne.returnGuess()).to.equal(turnOne.userGuess);
  });

  it('should be able to return the user\'s card', function() {
    turnOne.returnCard();
    expect(turnOne.returnCard()).to.equal(turnOne.currentCard);
  });

  it('should be able to see if the user chose the correct answer', function() {
    turnOne.evaluateGuess();
    expect(turnOne.evaluateGuess()).to.equal(false);

    turnTwo.evaluateGuess();
    expect(turnTwo.evaluateGuess()).to.equal(true);
  });

  it('should provide feedback based on the user\'s guess', function() {
    turnOne.evaluateGuess();
    turnOne.giveFeedback();
    expect(turnOne.giveFeedback()).to.equal('incorrect!');

    turnTwo.evaluateGuess();
    turnTwo.giveFeedback();
    expect(turnTwo.giveFeedback()).to.equal('correct!');
  })
});