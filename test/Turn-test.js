const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe('Turn', () => {
  it("should be initiated with two arguments--string that represents guess to question and card object for current card", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    expect(turn).to.have.property("guess").to.be.a("string");
    expect(turn).to.have.property("card").to.be.a("object");
  });
  it("should have a method that returns the guess", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal("object");
  });
  it("should have a method that returns the card", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card2);
  });
  it("should have a method that returns a boolean indicating if the users guess matches the correct answer on the card", () => {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn1 = new Turn("object", card1);
    const turn2 = new Turn("object", card2);


    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });
  it("should have a method that returns either incorrect or correct based on whether guess is correct or not", () => {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn1 = new Turn("object", card1);
    const turn2 = new Turn("object", card2);

    turn1.giveFeedback();
    turn2.giveFeedback();

    expect(turn1.giveFeedback()).to.equal("correct!");
    expect(turn2.giveFeedback()).to.equal("incorrect!");
  });
});
