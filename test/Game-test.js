const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3;
  let deck, deck2;
  let turn1, turn2, turn3;
  let round;
  let game, game2
  beforeEach(() => {

    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card (3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    deck = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2, card3]);

    turn1 = new Turn('tinfoil', card1);
    turn2 = new Turn('array', card2);
    turn3 = new Turn('mutator method', card3)

    round1 = new Round(deck);
    round2 = new Round(deck2);

    game = new Game(round1);
    game2 = new Game(round2)
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should instantiate a new Game', function() {
    expect(game).to.be.an.instanceof(Game)
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(round1)
  });

  it('should have a method to start everything', function() {
    expect(game.start())
  });

  it('should place three cards in a deck', function() {
    expect(game.start()).to.equal(round1)
  });

  it('should store the new deck in a round', function() {
    console.log(game.currentRound)
    expect(game.start()).to.equal(round1)
  });
});
