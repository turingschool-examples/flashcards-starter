const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data.js");
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Round", () => {
  let cardData;
  let card;
  let deck;
  let round;

  beforeEach(() => {
    deck = new Deck(data.prototypeData);
    cardData = deck.deckOfCards[0];
    card = new Card(
      cardData.id,
      cardData.question,
      cardData.answers,
      cardData.correctAnswer
    );
    round = new Round(deck);
  });

  it("should return the current card using a function", () => {
    expect(round.returnCurrentCard).to.be.a("function");
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it("should start at 0 turns and update the turns count whether correct or incorrect", () => {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it("should be able to evaluate the users guess and give feedback", () => {
    expect(round.takeTurn(card.correctAnswer)).to.equal("Correct!");
    expect(round.takeTurn("wrong")).to.equal("Incorrect!");
  });

  it("should keep track of incorrect guesses by id within an array", () => {
    expect(round.incorrectGuesses).to.be.a("array");
    round.takeTurn("100");
    expect(round.incorrectGuesses).to.deep.equal([card.id]);
  });

  it("should move to the next card in the deck after each turn", () => {
    round.takeTurn();
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

  it("should calculate the percentage of correct answers", () => {
    round.takeTurn(card.correctAnswer);
    round.takeTurn("wrong");
    round.takeTurn("wrong");
    expect(round.calculatePercentage()).to.equal(33);
  });
  
  it("should end the round and give the user their percentage", () => {
    round.takeTurn("object");
    round.takeTurn("object");
    expect(round.endRound()).to.equal(
      `** Round over! ** You answered ${50}% of the questions correctly!`
    );
  });
});
