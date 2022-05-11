const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", () => {
  it("should be a function", () => {
    const deck = new Deck();
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should have a multiple cards", () => {
    const card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const card2 = new Card(
      4,
      "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      ["mutator method", "accessor method", "iteration method"],
      "accessor method"
    );
    const card3 = new Card(
      11,
      "Which iteration method returns a new array with all elements that match a given condition?",
      ["filter()", "find()", "map()"],
      "filter()"
    );
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.be.a("array");
  });
  it("should know how many cards are in the deck", () => {
    const card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const card2 = new Card(
      4,
      "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      ["mutator method", "accessor method", "iteration method"],
      "accessor method"
    );
    const card3 = new Card(
      11,
      "Which iteration method returns a new array with all elements that match a given condition?",
      ["filter()", "find()", "map()"],
      "filter()"
    );
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});
