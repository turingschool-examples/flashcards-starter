const chai = require("chai");
const Card = require("../src/Card.js");
const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");
const Round = require("../src/Round.js");
const Game = require("../src/Game.js");
const data = require('../src/data');
const expect = chai.expect;

describe("Game", () => {
  let deck, round, game, cards;
  beforeEach(function() {
    cards = data.prototypeData.map(e => {
      return new Card(e["id"], e["question"], e["answers"], e["correctAnswer"])
    });
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game();
  });

  it("should create a new round with a deck when you start", () => {
    game.start(deck);
    expect(game.currentRound).to.be.an.instanceOf(Round);
    expect(game.currentRound.deck).to.be.ok;
  });

  it("should fill the deck with cards from the data file", () => {
    game.start(deck);
    const testCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    expect(game.currentRound.deck.cards.length).to.equal(30);
    expect(game.currentRound.deck.cards[0]).to.eql(testCard);
  });

  it("should keep track of the currentRound", () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })
})