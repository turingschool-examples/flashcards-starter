const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turns");

describe("Round", () => {
  let round;
  let turn;
  beforeEach(() => {
    let card = new Card(
      1,
      "What color is the sky?",
      ["blue", "yellow", "pink"],
      "blue"
    );
    turn = new Turn("blue", card);
    round = new Round(card, turn);
  });
  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should return the current card", () => {
    expect(round.returnCurrentCard()).to.equal(turn.card);
  });

  it("should store the current turn", () => {
    expect(round.turn).to.equal(turn);
  });

  it("should instantiate a new turn after a guess is made", () => {
    expect(round.takeTurn()).to.be.instanceOf(Turn);
  });

  it("should start out with 0 guesses", () => {
    expect(round.turns).to.equal(0);
  });

  it("should increment the guess count every time a guess is made", () => {
    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it("should return the next card after a guess is made", () => {
    round.takeTurn();
    expect(round.currentCard).to.be.an.instanceOf(Card);
  });
});
