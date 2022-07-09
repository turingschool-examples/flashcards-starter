const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data.js");
const prototypeQuestions = data.prototypeData;
const Game = require("../src/Game");

describe("Game", () => {
  let cards;
  let deck;
  let game;
  let round;

  beforeEach(() => {
    game = new Game();
    cards = game.getCards();
    deck = game.createDeck();
    round = game.createRound();
  });
  
  it("should assign all cards value", () => {
    expect(cards).to.be.a("array");
    expect(cards.length).to.equal(prototypeQuestions.length);
  });

  it("should put the asssigned cards into the deck", () => {
    expect(deck.deckOfCards).to.deep.equal(cards);
  });

  it("should create a round with the deck", () => {
    expect(deck.deckOfCards).to.deep.equal(cards);
  });
});
