const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;

const Turn = require("../src/Turn");

describe("Turn", () => {
  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });
  it("should have a guess to the question", () => {
    var turn = new Turn("array");
    expect(turn.guess).to.equal("array");
  });
  it("should have a current card to play", () => {
    var currentCard = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    var turn = new Turn("array", currentCard);
    expect(turn.currentCard).to.deep.equal(currentCard);
  });
  it("should return guess", () => {
    var turn = new Turn("array");
    expect(turn.returnGuess()).to.equal("array");
  });
  it("should return card", () => {
    var turn = new Turn();
    expect(turn.returnCard()).to.equal(turn.currentCard);
  });
  it("should be able to evaluate guess", () => {
    var currentCard = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    var turn = new Turn("object", currentCard);
    expect(turn.evaluateGuess()).to.equal(true);

    var turn = new Turn("array", currentCard);
    expect(turn.evaluateGuess()).to.equal(false);
  });
  it("should give feedback based on whether the guess is correct or not", () => {
    var currentCard = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    var turn = new Turn("object", currentCard);
    expect(turn.giveFeedback()).to.equal("correct");

    var turn = new Turn("array", currentCard);
    expect(turn.giveFeedback()).to.equal("incorrect");
  });
});
