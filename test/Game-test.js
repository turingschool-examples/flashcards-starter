const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });


  it('should keep track of currentRound', function() {

    const deck = new Deck(["card1", "card2", "card3"])
    const round = new Round(deck);
    const game = new Game(round);

    expect(game.currentRound).to.equal(round);
  });


  it('should create Cards', function() {

    const game = new Game("x");

    game.start();

    expect(game.currentRound.deck.cards).to.equal(prototypeQuestions);
  });
 
// put cards in a Deck
  it.skip('should put cards in a Deck', function() {
  });

// Creates a new Round using the Deck
  it.skip('should create new round', function() {
  });

  // invokes printMessage to display the message in the CLI
  it.skip('should print message in CLI', function() {
  });

// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  it.skip('should allow interaction with CLI', function() {
  });
});