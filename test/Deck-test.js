const chai = require("chai");
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");
const expect = chai.expect;

describe("Deck", () => {
  const card1 = new Card(1, "What is my fav food?", ["rice", "reeses"], "rice");
  const card2 = new Card(2, "What is my name?", ["Blohn", "Grohn", "John"], "John");
  const card3 = new Card(3, "What is my fav animal?", ["koala", "panda", "sloth"], "sloth");
  const deck = new Deck([card1, card2, card3]);

  it("should be a function", () => {
    expect(Deck).to.be.a("function");
  });

  it("should contain an array of cards", () => {
    expect(deck.cards).to.be.a("array");
  });

  it("should have instances of Card in its cards", () => {
    expect(deck.cards[0]).to.be.an.instanceOf(Card);
  });

  it("should be able to return the deck length", () => {
    const cardTotal = deck.countCards();
    expect(cardTotal).to.equal(3);
  });
})