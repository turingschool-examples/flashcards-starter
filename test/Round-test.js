const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    card2 = new Card(
      29,
      "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
      ["true", "false"],
      "true"
    );
    card3 = new Card(
      27,
      "Accessor methods permanently modify the original array, mutator methods do not.",
      ["true", "false"],
      "false"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should make the first card in deck the current card", () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should return the current card", () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should have a method for the player to take a turn", () => {
    round.takeTurn("dot notation");
    expect(round.turns).to.equal(1);
  });

  it("should increase the turns by 1 each turn", () => {
    round.takeTurn("dot notation");
    round.takeTurn("bracket notation");
    round.takeTurn("variables");
    expect(round.turns).to.equal(3);
  });

  it("should be able to evaluate if the player's guess is correct", () => {
    expect(round.takeTurn("object")).to.equal("You are Correct! 🌟 ");
  });

  it("should be able to evaluate if the player's guess is incorrect", () => {
    expect(round.takeTurn("variables")).to.equal("Incorrect 😩 ");
  });

  it("should store the incorrect guesses", () => {
    round.takeTurn("variables");
    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it("should return the percent correct to the player in a message", () => {
    round.takeTurn("object");
    round.takeTurn("variables");
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
  it("should inform the user of their percentage correct answers", () => {
    round.takeTurn("object");
    round.takeTurn("variables");
    expect(round.endRound()).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});