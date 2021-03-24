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
    const round = new Round(deck, card1);
    expect(round.deck).to.be.a("object");
  });

  it("Should store the current card in play", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const deck = new Deck([card1]);
    const round = new Round(deck, card1);
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
    const round = new Round(deck, card1);
    const turn1 = round.takeTurn("object");
    expect(round.turns).to.equal(1);
  });

  it("Should update the current card when a turn is made", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1, card2]);
    const round = new Round(deck, card1);
    const turn1 = round.takeTurn("object");
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it("Should evaluate the guess", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const deck = new Deck([card1, card2]);
    const round = new Round(deck, card1);
    const turn1 = round.takeTurn("object");
    expect(round.takeTurn()).to.equal("Your value of object is correct!");
    // const turn2 = round.takeTurn("function");
    // expect(round.takeTurn()).to.equal("Your value of function is incorrect!");
  });

  it("Should store incorrect guesses", function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck, card1);
    const turn1 = round.takeTurn("function");
    const turn2 = round.takeTurn("function");
    const turn3 = round.takeTurn("true");
    expect(round.incorrectGuesses).to.have.lengthOf(3);
    expect(round.incorrectGuesses[0]).to.be.a("object");
    expect(round.incorrectGuesses[1].id).to.equal(2);
  });
})
