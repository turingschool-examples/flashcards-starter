const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Round = require("../src/Round");


describe("Round", function() {

  it("Should be a function", function() {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("Should store a deck object", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card1]);
    const round = new Round(deck);
    expect(round.deck).to.be.a("object");
  });

  it("Should store the current card in play", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card1]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("Should default to 0 turns", function() {
    const round = new Round();
    expect(round.turns).to.equal(0);
  });

  it("Should take turns", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    const turn1 = round.takeTurn("object");
    expect(round.turns).to.equal(1);
  })
})
