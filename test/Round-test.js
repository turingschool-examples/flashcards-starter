const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card");

describe("Round", () => {
  let round;
  beforeEach(() => {
    let card = new Card(
      1,
      "What color is the sky?",
      ["blue", "yellow", "pink"],
      "blue"
    );
    round = new Round();
  });
  it("should return the current card", () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });
});
