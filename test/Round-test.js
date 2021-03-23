const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
// const Turn = require("../src/Turn");
const Round = require("../src/Round");


describe("Round", function() {

  it("Should be a function", function() {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("Should store the current card in play", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck.cards[0]);
    expect(round.currentCard).to.deep.equal(card1);
  });
})
