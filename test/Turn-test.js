const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Turn');

describe('Turn', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let turn1;
  let turn2;
  beforeEach(() => {

    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    deck = new Deck([card1, card2, card3]);

    turn = new Turn();
    turn1 = new Turn('tinfoil', card1);
    turn2 = new Turn('array', card2)


  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    expect(turn1.guess).to.equal('tinfoil');
  });

  it('should store a different guess', function() {
    expect(turn2.guess).to.equal('array');
  });

  it('should store the current card in play', function() {
    expect(turn1.currentCard).to.equal(card1);
  });

  it('should be able to return the current guess', function() {
    expect(turn1.returnGuess()).to.equal('tinfoil');
  });

  it('should be able to return the current card', function() {
    expect(turn1.returnCard()).to.equal(card1);
  });

  it('should return true if the guess is correct', function() {
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return false if the guess is incorrect', function() {
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should return "correct!" if the guess is right', function() {
    expect(turn2.giveFeedback()).to.equal('correct!');
  });

  it('should return "incorrect!" if the guess is wrong', function() {
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  })
});
