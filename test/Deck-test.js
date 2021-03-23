const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", function() {

  it("Should be a function", function() {
    const deck = new Deck();
    expect(Deck).to.be.a("function");
  });

  it("Should store card objects", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.be.a("array");
    expect(deck.cards[0]).to.be.a("object");
    expect(deck.cards[2].id).to.equal(3);
  });

  it("Should know how many Cards are in the Deck", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
})
