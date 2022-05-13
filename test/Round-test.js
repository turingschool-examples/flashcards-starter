const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turns = require("../src/Turns");

describe("Round", () => {
  let card1, card2, card3, card4, deck, round, turn;

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
    card4 = new Card(
      3,
      "What is Betul's pets' names?",
      ["Togo-Lily", "Daisy-Lucy", "Sun-Moon"],
      "Togo-Lily"
    );

    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck);
    // turn = new Turns(guess, currentCard);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should store a Deck", () => {
    expect(round.deck.cards).to.be.an("array");
    expect(round.deck).to.equal(deck);
  });

  it("should be able to return the current card", () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it("should updates turns count", () => {
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it("should have an incorrect guesses", () => {
    round.takeTurn("Fritz");

    expect(round.incorrectGuesses).to.be.an("array");
  });

  it("should store incorrect guess", () => {
    round.takeTurn("Fritz");

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it("should evaluate the current guess", () => {
    round.takeTurn("sea otter");

    expect(round.takeTurn("sea otter")).to.equal("correct!");
  });

  it("should evaluate the current guess if it is incorrect", () => {
    round.takeTurn("spleen");

    expect(round.takeTurn("spleen")).to.equal("incorrect!");
  });

  it.skip("should be able to calculate the percentage of correct guesses", () => {
    round.takeTurn("capybara");
    round.takeTurn("appendix");
    expect(round.calculatePercentCorrect()).to.equal(0);

    round.takeTurn("playing with bubble wrap");
    round.takeTurn("Togo-Lily");

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should be able to game over', () => {
    round.takeTurn("capybara");
    round.takeTurn("appendix");
    round.takeTurn("playing with bubble wrap");
    round.takeTurn("Togo-Lily");
    expect(round.endRound()).to.equal("** Round over! ** You answered 50% of the questions correctly!")
  })
});
