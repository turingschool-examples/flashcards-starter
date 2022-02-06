const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function () {
  it("should be a function", function () {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn = new Turn();
    expect(turn).to.be.a.instanceOf(Turn);
  });

  it("should store a guess", function () {
    const turn = new Turn("guess");
    expect(turn.guess).to.equal("guess");
  });

  it("should store a card", function () {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("guess", card);
    expect(turn.card).to.equal(card);
  });

  it("should return the guess", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("guess", card);
    expect(turn.returnGuess()).to.equal("guess");
  });

  it("should return the Card", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("guess", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it("should return true if guess matches correct answer on card", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return string of "correct!" if guess is correct', () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.giveFeedback()).to.equal("correct!");
  });

  it('should return string of "incorrect!" if guess is incorrect', () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("array", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
