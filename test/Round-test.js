const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Round', function() {
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
    const round = new Round;
    expect(Round).to.be.a('function')
  });

  it('should instantiate a new Round', function() {
    const round = new Round;
    expect(round).to.be.an.instanceof(Round)
  });

  it('should store the current card as the first in the deck', function() {

  });
});
