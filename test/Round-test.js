const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;
  let turn;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    card3 = new Card( 3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = new Deck([card1, card2, card3]);
    round = new Round (deck);
    turn = new Turn('function', card1);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a method that returns current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should create a new instance of Turn when a guess is made', function() {
    const newTurn = round.takeTurn('array');

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should have a method that updates turns count', function() {
    round.takeTurn('array');

    expect(round.turns).to.equal(1);
  });

  it('should have a method that takes the next card and makes it the current card', function () {
    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('array');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should have a method that evaluates and records incorrect guesses', function() {

    round.takeTurn('array');
    expect(round.incorrectGuesses[0]).to.equal(1);

    round.takeTurn('function');
    expect(round.incorrectGuesses[1]).to.equal(2);
  });

  it('should have a method that stores ids of incorrect guesses', function() {

    round.takeTurn('array');
    round.takeTurn('object');
    round.takeTurn('string');

    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses[0]).to.equal(1);

    expect(round.incorrectGuesses[1]).to.equal(2);
  });

  it('should have a method that gives feedback', function() {

    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('object')).to.equal('incorrect!');
  });

  it('should have a method that returns the percentage of correct guesses', function() {

    round.takeTurn('object');
    round.takeTurn('object');
    round.takeTurn('string');

    expect(round.calculatePercentCorrect()).to.equal(33)
  })

  it('should have a method that prints "**Round over!** You answered % of the questions correctly!"', function() {

    round.takeTurn('object');
    round.takeTurn('object');
    round.takeTurn('string');

    // expect(console.log.calledWith("**Round over!** You answered 33% of the questions correctly!")).to.be.true;
  })
})
