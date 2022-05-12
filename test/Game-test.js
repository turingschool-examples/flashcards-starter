const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Deck = require("../src/Deck");

var newGame = new Game();

var startGame = newGame.start();

describe("Game", () => {
  it("should be a function", () => {
    const game = new Game();
    expect(Game).to.be.a("function");
  });

  it("should be an instance of Game", () => {
    const game = new Game();
    expect(newGame).to.be.an.instanceof(Game);
  });

  it("should instantiate a deck", () => {
    expect(startGame.deck).to.be.an.instanceof(Deck);
  });

  it("should keep track of rounds", () => {
    expect(newGame.currentRound()).to.equal(startGame);
  });
});
