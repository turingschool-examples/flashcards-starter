const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Round = require("../src/Round");


describe("Round", () => {
  let card1, card2, card3, deck, round, turn1, turn2, turn3;
  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "forEach() returns an array", ["true", "false"], "false");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck, card1);
  });

  it("Should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("Should store a deck object", () => {
    expect(round.deck).to.be.a("object");
  });

  it("Should store the current card in play", () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("Should default to 0 turns", () => expect(round.turns).to.equal(0));

  it("Should take turns", () => {
    const turn1 = round.takeTurn("object");
    expect(round.turns).to.equal(1);
  });

  it("Should update the current card when a turn is made", () => {
    const turn1 = round.takeTurn("object");
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it("Should evaluate the guess", () => {
    const turn1 = round.takeTurn("object");
    const turn2 = round.takeTurn("function");
    expect(turn1).to.equal("Your value of object is correct!");
    expect(turn2).to.equal("Your value of function is incorrect!");
  });

  it("Should store incorrect guesses", () => {
    const turn1 = round.takeTurn("function");
    const turn2 = round.takeTurn("function");
    const turn3 = round.takeTurn("false");
    expect(round.incorrectGuesses).to.have.lengthOf(2);
    expect(round.incorrectGuesses[0]).to.be.a("object");
    expect(round.incorrectGuesses[1].id).to.equal(2);
  });
})
