const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");
const Game = require("../src/Game");


describe("Game", () => {
  let game;
  beforeEach(() => game = new Game());

  it("Should be a function", () => expect(Game).to.be.a("function"));

  it("Should instantiate on round 1", () => expect(game.currentRound).to.equal(1));

})
