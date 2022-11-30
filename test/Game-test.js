const chai = require("chai");
const expect = chai.expect;
const Turn = require("../src/Turns");
const Card = require("../src/Card");
const Card1 = require("../src/Card");
const Deck = require("../src/Deck.js");
const Game = require("../src/Game");
const Round = require("../src/Round");

describe("Game", () => {
  let round;
  let turn;
  let card;
  let card2;
  let card3;
  let deck;
  let game;
  beforeEach(() => {
    card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    card2 = new Card(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array"
    );
    card3 = new Card(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method"
    );
    deck = new Deck([card, card2, card3]);
    round = new Round(deck);
    game = new Game();
  });
  // it("should keep track of the current round", () => {
  //   expect(game.currentRound).to.equal(round);
  // });
  // it("should start the game with new questions", () => {
  //   expect(game.createCards()[0]).to.deep.equal(card);
  // });
  // it("should create a new deck", () => {
  //   expect(game.createDeck().cards[0]).to.deep.equal(deck.cards[0]);
  // })
  it("should create a new round using the new deck", () => {
    expect(game.createRound().deck[0]).to.be.an.instanceOf(round);
  });
});
