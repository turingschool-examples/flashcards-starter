const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", () => {
  let card;
  let turn;
  beforeEach(function () {
    card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    turn = new Turn("pug", card);
  });

  it("should be an instance of Turn", () =>
    expect(turn).to.be.an.instanceof(Turn));

  it("should have a guess and a card", () => {
    expect(turn.guess).to.deep.equal("pug");
    expect(turn.card).to.deep.equal(card);
  });

  it("should be able to return a guess", () =>
    expect(turn.returnGuess()).to.deep.equal("pug"));

  it("should be able to return the card", () =>
    expect(turn.returnCard()).to.deep.equal(card));

  it("should be able to evaluate the guess", () => {
    expect(turn.evaluateGuess()).to.deep.equal(false);

    turn.guess = "sea otter";

    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it("should give feedback", () => {
    expect(turn.giveFeedback()).to.deep.equal("incorrect!");

    turn.guess = "sea otter";

    expect(turn.giveFeedback()).to.deep.equal("correct!");
  });
});
