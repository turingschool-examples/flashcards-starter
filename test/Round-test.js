const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Round", () => {
  let card1, card2, card3, deck, round;
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
  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });
  it("should store deck cards", () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });
  it("should store first card from deck", () => {
    expect(round.currentCard).to.deep.equal(card1);
  });
  it("should return current card being played", () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });
  it("should have turns 0 by default", () => {
    expect(round.turns).to.equal(0);
  });
  it("should update turns count", () => {
    round.takeTurn("sea otter");
    round.takeTurn("sea otter");
    expect(round.turns).to.equal(2);
    it("should create instance of Turn when guess is made");
  });
  it("Next card should become current card", () => {
    round.takeTurn("sea otter");
    expect(round.currentCard).to.equal(card2);
  });
  it("should have an incorrect guesses as an emty array by defauld", () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  it("should save an incorrect guess", () => {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    round.takeTurn("watching Netflix");
    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
  });
  it("should return feedback", () => {
    expect(round.takeTurn("sea otter")).to.equal("correct");
    expect(round.takeTurn("spleen")).to.equal("incorrect");
  });
  it("should return percentage of correct guesses", () => {
    round.takeTurn("spleen");
    expect(round.calculatePercentCorrect()).to.equal(67);
  });
  it("should have a endRound function", () => {
    round.takeTurn("spleen");
    round.takeTurn("spleen");
    round.endRound();
    expect(round.endRound).to.be.a("function");
  });
});
