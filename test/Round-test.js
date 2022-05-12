const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Round", () => {
  beforeEach(() => {
    card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    card2 = new Card(
      4,
      "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      ["mutator method", "accessor method", "iteration method"],
      "accessor method"
    );
    card3 = new Card(
      11,
      "Which iteration method returns a new array with all elements that match a given condition?",
      ["filter()", "find()", "map()"],
      "filter()"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.a.instanceof(Round);
  });

  it("should start with a deck of cards", () => {
    expect(round.deck).to.be.an.instanceof(Deck);
    expect(round.deck).to.equal(deck);
  });

  it("should return the current card", () => {
    expect(round.currentCard).to.equal(card1);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should keep track of the number of turns", () => {
    expect(round.turns).to.equal(0);
    round.takeTurn("object");
    expect(round.turns).to.equal(1);
    round.takeTurn("iteration method");
    expect(round.turns).to.equal(2);
  });

  it("should keep track of incorrect guesses", () => {
    round.takeTurn("object");
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn("iteration method");
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it("should cycle through the cards in the deck", () => {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
    round.takeTurn();
    expect(round.currentCard).to.equal(card3);
  });

  it("should give users feedback for their guesses", () => {
    expect(round.takeTurn("object")).to.equal("correct!");
  });

  it("should calculate percentage of questions answered correctly", () => {
    round.takeTurn("object");
    round.takeTurn("iteration method");
    round.takeTurn("filter()");
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it("should end the round", () => {
    round.takeTurn("object");
    round.takeTurn("iteration method");
    round.takeTurn("filter()");
    expect(round.endRound()).to.equal(
      "** Round over! You answered 66% of the questions correctly!"
    );
  });
});
