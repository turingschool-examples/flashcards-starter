const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turns");
const Deck = require("../src/Deck");

describe("Round", () => {
  let round;
  let turn;
  let card;
  let card2;
  let card3;
  let deck;
  beforeEach(() => {
    card = new Card(
      1,
      "What color is the sky?",
      ["blue", "yellow", "pink"],
      "blue"
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
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should have the first card of the deck as the first card", () => {
    expect(round.currentCard).to.equal(deck.cards[0]);
  });

  it("should return the current card", () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it("should start out with 0 guesses", () => {
    expect(round.turns).to.equal(0);
  });

  it("should increment the guess count every time a guess is made", () => {
    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it("should store the current deck", () => {
    expect(round.deck).to.equal(deck);
  });

  it("should return the next card after a guess is made", () => {
    round.takeTurn();

    expect(round.currentCard).to.equal(deck.cards[1]);
  });

  it("should evaluate if a guess is correct, and push the incorrect id into the incorrect guesses array if so", () => {
    const guess = new Turn("pink", card);

    round.takeTurn("pink");

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
});
