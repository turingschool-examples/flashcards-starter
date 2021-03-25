const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Game = require("../src/Game");
const Round = require("../src/Round")
const Turn = require("../src/Turn");

describe("Game class", () => {
  it("should keep track of the currentRound", () => {
    let game = new Game();
    let newRound = game.currentRound();

    expect(newRound).to.be.a("object");
  });
  describe("start method", () => {
    it.skip("should create Cards", () => {

    });
    it.skip("should put Cards in a deck", () => {

    });
    it.skip("should create a new Round using the Deck", () => {

    });
    it.skip("should invoke printMessage to display the message in the CLI", () => {

    });
    it.skip("should invoke printQuestion to kick off our helper functions that allow interaction via the CLI", () => {

    });
  });
});
