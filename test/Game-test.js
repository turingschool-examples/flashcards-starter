const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");
const Game = require("../src/Game");

describe("Game", () => {
  let game;
  beforeEach(() => {
    game = new Game();
    game.testing = true;
    game.start();
  });

  it("should be a function", () => expect(Game).to.be.a("function"));

  it("should be an instance of Game", () => expect(game).to.be.an.instanceof(Game));

  it("should create cards", () => expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card));

  it("should create a deck", () => expect(game.currentRound.deck).to.be.an.instanceof(Deck));

  it("should instantiate a Round ", () => expect(game.currentRound).to.be.an.instanceof(Round));
})
