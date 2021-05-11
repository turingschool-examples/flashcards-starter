const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });

// Should keep track of the currentRound

  it('should keep track of currentRound', function() {

    const deck = new Deck(["card1", "card2", "card3"])
    const round = new Round(deck);
    const game = new Game(round);

    expect(game.currentRound).to.equal(round);
  });

// create cards

  it.skip('should create Cards', function() {

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