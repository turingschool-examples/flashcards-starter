const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Game = require("../src/Game");
const Round = require("../src/Round")
const Turn = require("../src/Turn");

describe("Game class", () => {
  let game;
  let testData;
  beforeEach(()=> {
    testData = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }]
    game = new Game(testData);
    game.start();
  });
  it("should keep track of the currentRound", () => {
    expect(game.currentRound).to.be.a("object");
  });
  describe("start method", () => {
    it("should create Cards", () => {
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
    });
    it("should put Cards in a deck", () => {
      expect(game.currentRound.deck).to.be.an.instanceOf(Deck);
      expect(game.currentRound.deck.cards).to.have.lengthOf(3);
    });
    it("should create a new Round using the Deck", () => {
      const testDeck = new Deck(testData);
      expect(game.currentRound).to.be.an.instanceOf(Round);
      expect(game.currentRound.deck).to.deep.equal(testDeck);
    });
  });
});
