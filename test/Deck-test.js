const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", () => {
  let card1, card2, card3, deck;
  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    deck = new Deck([card1, card2, card3]);
  });

  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should store card objects", () => {
    expect(deck.cards).to.be.a("array");
    expect(deck.cards[0]).to.be.a("object");
    expect(deck.cards[2].id).to.equal(3);
  });

  it("should know how many Cards are in the Deck", () => {
    expect(deck.countCards()).to.equal(3);
  });
})
