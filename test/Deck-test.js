const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data.js");
const Deck = require("../src/Deck");

describe("Deck", () => {
  let deck;

  beforeEach(() => {
    deck = new Deck(data.prototypeData);
  });

  it("shoud have an array of cards", () => {
    expect(deck.deckOfCards).to.deep.equal(data.prototypeData);
  });

  it("should know how many cards are in the deck", () => {
    expect(deck.countCards()).to.equal(30);
  });
});
