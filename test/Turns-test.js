const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  it("should be a function", () => {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should have a users guess", () => {
    const turn = new Turn("object");
    expect(turn.guess).to.equal("object");
  });

  it("should have a card", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it("should return users guess", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.returnGuess()).to.equal("object");
  });

  it("should return the card", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it("should evaluate if the guess is correct", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "array"
    );
    const turn = new Turn("object", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should give feedback if the guess is correct or not", () => {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "array"
    );
    const turn = new Turn("object", card);
    expect(turn.giveFeedback(turn.evaluateGuess())).to.equal("incorrect!");
  });
});
