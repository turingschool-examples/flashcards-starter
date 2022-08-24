const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should be instatiated with multiple cards", () => {
    const card1 = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const card2 = new Card(2, "What is 2 + 2", ["22", "4", "0"], "4");
    const deck = new Deck([card1, card2]);
    expect(deck.cardsInDeck).to.deep.equal([card1, card2]);
  });

  it("should know how many cards are in the deck", () => {
    const card1 = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const card2 = new Card(2, "What is 2 + 2", ["22", "4", "0"], "4");
    const deck = new Deck([card1, card2]);
    deck.countCards();
    expect(deck.cardsInDeck.length).to.equal(2);
  });
});
