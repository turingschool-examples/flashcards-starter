const chai = require("chai");
const expect = chai.expect;
const Turn = require("../src/Turns");
const Card = require("../src/Card");
const Round = require("../src/Round");

describe("Turn", function () {
  let turn;
  let card = new Card(
    1,
    "What color is the sky?",
    ["blue", "yellow", "pink"],
    "blue"
  );
  beforeEach(() => {
    turn = new Turn("blue", card);
  });

  it("should be a function", () => {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should have a player guess", () => {
    expect(turn.guess).to.equal("blue");
  });

  it("should hold the current card", () => {
    expect(turn.card).to.equal(card);
  });

  it("should return the player guess", () => {
    expect(turn.returnGuess()).to.equal("blue");
  });

  it("should return the current card", () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it("should evaluate whether the player guess is correct or incorrect", () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should provide feedback if the correct answer was chosen", () => {
    expect(turn.provideFeedback()).to.equal("Your answer is correct!");
  });

  it("should also provide feedback if the incorrect answer was chosen", () => {
    const newTurn = new Turn("pink", card);
    expect(newTurn.provideFeedback()).to.equal("Your answer is incorrect :(");
  });
});
