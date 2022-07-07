const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
//const prototypeData = require("../src/data");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", function () {
  let deck;
  let round;

  beforeEach(function () {
    let card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    let card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    let card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Deck", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip("should return the current card", function () {
    expect(round.returnCurrentCard()).to.equal(deck.deck[0]);
  });

  it.skip("should take turn", function () {
    expect(round.takeTurn()).to.equal(updatesTurn);
  });

  it.skip("should calculate the correct percentage", function () {
    expect(round.calculatePercentCorrect()).to.equal("percent");
  });

  it.skip("should end the round", function () {
    expect(round.endRound()).to.equal(
      `Round over! You answered %${percentage}`
    );
  });
});

// Your Round class will be the object that takes in responses and
// records these guesses (as well as if they are correct or incorrect).
// The currentCard should be the first Card in the Deck
// (the array of Cards) at the start of the Round

// Your Round class should meet the following requirements:

// returnCurrentCard: method that returns the current card being played

// takeTurn: method that updates turns count, evaluates guesses,
// gives feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.

// The turns count is updated, regardless of whether the guess is correct or
// incorrect

// The next card becomes current card Guess is evaluated/recorded.
// Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and
// returns the percentage of correct guesses

// endRound: method that prints the following to the

// console: ‘** Round over! ** You answered <>% of the questions correctly!’
