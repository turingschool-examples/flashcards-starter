const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Card = require("../src/Card");
//const prototypeData = require("../src/data");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Game", function () {
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip("should count how many cards are in the deck", function () {
    const deck3 = new Deck([card1, card2, card3]);

    expect(deck3.countCards()).to.be.equal(3);
  });
});

// Your Game class should meet these other requirements:
// Should keep track of the currentRound

// start: method that starts everything

// Creates Cards

// Puts Cards in a Deck

// Creates a new Round using the Deck

// invokes printMessage to display the message in the CLI

// invokes printQuestion to kick off our helper functions that
// allow interaction via the CLI

// Note: The helper functions are all fleshed out and fit to work with
// classes/methods that meet the requirements in the past iterations.

// Your game.start() method should be invoked to
// make the game playable in the console.

// Look at the file being run when we want to start the game.
// Think about where you need to invoke your Game.start method.
