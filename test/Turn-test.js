const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card1;
  let card2;
  let card3;
  // let turn;
  let turn1;
  let turn2;

  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    // turn = new Turn();
    turn1 = new Turn('for loop', card1);
    turn2 = new Turn('array', card2);

  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should store an users guess', function() {
    expect(turn1.guess).to.equal('for loop');
  });

  it('should store a new guess', function() {
     expect(turn2.guess).to.equal('array');
  });

  it('should pull a new card', function() {
    expect(turn1.card).to.equal(card1);
  });

  it('should return the guess', function() {
    expect(turn1.returnGuess()).to.equal('for loop');
  });

  it('should return the Card', function() {
    expect(turn1.returnCard()).to.equal(card1);
  });

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card is false', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card is true', function() {
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
     expect(turn1.giveFeedback()).to.equal('incorrect!');
  });

});

