const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", () => {
  let card1, card2, turn1, turn2;
  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    turn1 = new Turn("function", card1);
    turn2 = new Turn("array", card2);
  });

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should keep track of current card in play", () => {
    expect(turn1.currentCard).to.equal(card1);
    expect(turn1.currentCard).to.be.a("object");
    expect(turn2.currentCard).to.equal(card2);
    expect(turn2.currentCard).to.be.a("object");
  });

  it("should store the user\'s guess to the question", () => {
    expect(turn1.userGuess).to.equal("function");
  });

  it("should return the guess", () => {
    expect(turn1.returnGuess()).to.equal("function");
  });

  it("should return the Card", () => {
    expect(turn1.returnCard()).to.equal(card1);
  });

  it("should evaluate the user\'s guess", () => {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it("should provide feedback based on the guess evaluation", () => {
    expect(turn1.giveFeedback()).to.equal("incorrect!");
    expect(turn2.giveFeedback()).to.equal("correct!");
  });
})
