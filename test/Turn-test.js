const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", () => {
  it("should be a funtion", () => {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should contain the users guess to the question", () => {
    const turn1 = new Turn("capybara");
    expect(turn1.guess).to.equal("capybara");
  });

  it("should contain current card in play", () => {
    const card = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const turn = new Turn("green", card);
    expect(turn.card).to.equal(card);
  });

  it("should return the users guess", () => {
    const card = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const turn = new Turn("green", card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal("green");
  });

  it("should return the current card in play", () => {
    const card = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const turn = new Turn("green", card);
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it("should indicate if the user's guess is correct", () => {
    const card = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const turn = new Turn("green", card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should inform the player if their guess is correct or not", () => {
    const card = new Card(
      1,
      "What color is the sky",
      ["blue", "green", "red"],
      "blue"
    );
    const turn = new Turn("green", card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal("Incorrect!");
  });
});
