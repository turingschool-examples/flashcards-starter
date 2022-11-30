const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Turn = require("../src/Turn");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let round;
  let deck;
  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be an instance of round", () =>
    expect(round).to.be.an.instanceOf(Round));

  it("should have a deck", () => expect(round).to.have.property("deck"));

  it("should keep track of how many rounds have occured", () =>
    expect(round).to.have.property("rounds").to.deep.equal(0));

  it("should track incorrect guesses", () => {
    expect(round).to.have.property("incorrectGuesses").to.be.an("array");
    round.takeTurn("pug");
    expect(round.incorrectGuesses[0]).to.deep.equal(1);
    round.takeTurn("gallbladder");
    expect(round.incorrectGuesses.length).to.deep.equal(1);
  });

  it("should be able to return the current card", () =>
    expect(round.returnCurrentCard()).to.equal(card1));

  it("should create a new instance of turn", () => {
    round.takeTurn("sea otter");
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
  });

  it("should increment the rounds count", () => {
    round.takeTurn("sea otter");
    expect(round.rounds).to.be.deep.equal(1);
  });

  it("should evaluate the guess", () => {
    expect(round.takeTurn("sea otter")).to.deep.equal("correct!");
    expect(round.takeTurn("spleen")).to.deep.equal("incorrect!");
  });

  it("should calculate percentage correct", () => {
    round.takeTurn("sea otter");
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix");
    expect(round.calculatePercentCorrect()).to.deep.equal(66.67);
  });

  it("should print a message to the console to end round", () => {
    round.takeTurn("sea otter");
    round.takeTurn("gallbladder");
    round.takeTurn("watching Netflix");
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 66.67% of the questions correctly!"
    );
  });
});
