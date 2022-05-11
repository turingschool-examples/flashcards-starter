const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let turn1;
    let turn2;
    let round;
    beforeEach(() => {

      card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
      card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
      card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

      deck = new Deck([card1, card2, card3]);

      turn = new Turn();
      turn1 = new Turn('tinfoil', card1);
      turn2 = new Turn('array', card2)

      round = new Round(deck[0], turn1);
      round2 = new Round(deck[1], turn2)

    });

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should instantiate a new Round', function() {
    expect(round).to.be.an.instanceof(Round)
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(round.theCard)
  });

  it('should update a turn count whenever a guess is made', function() {
    round.takeTurn();
    expect(round.turnCounter).to.equal(1);
  });

  it('should have the turn counter start at 0', function() {
    expect(round.turnCounter).to.equal(0);
  });

  it('should store incorrect guesses in an array', function() {
    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal([1])
  });

  it('should still give feedback for a right answer', function() {
    expect(round2.takeTurn()).to.equal('correct!');
  });

  it('should still give feedback for a wrong answer', function() {
    expect(round.takeTurn()).to.equal('incorrect!');
  });
});
