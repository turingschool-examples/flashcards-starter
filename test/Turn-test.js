const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
  // Add before each for turn and turn2 variables!!!!
  let currentCard;

  beforeEach(() => {
    currentCard = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
  });

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    let turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should store a user's guess", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.usersGuess).to.equal("object");
  });

  it("should store the current card", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.currentCard).to.deep.equal({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      possibleAnswers: ["object", "array", "function"],
      correctAnswer: "object",
    });
  });

  it("should return the user's guess", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.returnGuess()).to.equal("object");
  });

  it("should return the current card", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      possibleAnswers: ["object", "array", "function"],
      correctAnswer: "object",
    });
  });

  it("should return true if user is correct", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should return false if user is wrong", () => {
    let turn2 = new Turn("array", currentCard);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it("should give feedback saying that user is correct", () => {
    let turn = new Turn("object", currentCard);
    expect(turn.giveFeedback()).to.equal("Correct!");
  });

  it("should give feedback saying that user is incorrect", () => {
    let turn2 = new Turn("array", currentCard);
    expect(turn2.giveFeedback()).to.equal("Incorrect!");
  });
});
