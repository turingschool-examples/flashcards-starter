const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');


describe('Game', function() {
  let round, deck, turn, card1, card2, card3, game;
  beforeEach(function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn();
    game = new Game(round);
  });
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the round', function() {
    game.start();
    //creates a new round, so that should be a round
    expect(game.currentRound).to.equal(round);
  })

  it('should create cards', function() {
    game.start();
    expect(deck.allCards).to.deep.equal([card1, card2, card3]);
  });

  // it('should create a new round', function() {
  //   game.start();
  //
  //   expect(game.round).to.deep.equal([round]);
  // })
});
