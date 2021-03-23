const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe('Turn', () => {
  it.skip("should be initiated with two arguments--string that represents guess to question and card object for current card", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    expect(turn).to.have.property("guess").to.be.a("string");
    expect(turn).to.have.property("guess").to.equal("object");
    expect(turn).to.have.property("card").to.be.a("object");
    expect(turn).to.have.property("card").to.equal("card2");
  });
  it.skip("should have a method that returns the guess", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal("object");
  });
  it.skip("should have a method that returns the card", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.returnCard();

    expect(turn.returnCard()).to.equal("card2");
  });
  it.skip("should have a method that returns a boolean indicating if the users guess matches the correct answer on the card", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });
  it("should have a method that returns either incorrect or correct based on whether guess is correct or not", () => {
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const turn = new Turn("object", card2);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
