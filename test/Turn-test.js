const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(function() {
    card1 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
//card2 w wrong answer
//card3
    turn1 = new Turn('bracket notation and dot notation', card1);
  })
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn);
  });

  it('should be able take the user\'s guess as an argument', () => {
    expect(turn1).to.have.property('userGuess');
  });

  it('should be able to take in an instance of Card', () => {
    expect(turn1).to.have.property('card');
  });

  it('should be able to return the user\'s guess', () => {
    expect(turn1.returnGuess()).to.equal('bracket notation and dot notation');
  });

  it('should be able to return the Card instance', () => {
    expect(turn1.returnCard()).to.equal(turn1.card);
  });

  it('should return a value of true if the user\'s guess is correct', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should return a value of true if the user\'s guess is correct', () => {
    expect(turn1.giveFeedback()).to.equal("Correct!");
  });
});
