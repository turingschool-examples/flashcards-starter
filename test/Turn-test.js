const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data.js");
const Turn = require("../src/Turn");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Turn", () => {
  let turn;
  let wrongTurn;
  let cardData;
  let card;
  let deck;

  beforeEach(() => {
    deck = new Deck(data.prototypeData);
    cardData = deck.deckOfCards[0];
    card = new Card(
      cardData.id,
      cardData.question,
      cardData.answers,
      cardData.correctAnswer
    );
    turn = new Turn(card.correctAnswer, card);
    wrongTurn = new Turn("wrong", card);
  });

  it(`should be able to take a user's guess as a string`, () => {
    expect(turn.input).to.be.a("string");
  });

  it("should be able to create a new instance of Card in play", () => {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it(`should return the user's guess with a function`, () => {
    expect(turn.returnGuess()).to.equal(turn.input);
  });

  it("should be able to return the Card instance with a function", () => {
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it("should evaluate if guess matches the correct answer", () => {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(wrongTurn.evaluateGuess()).to.equal(false);
  });

  it("should give CORRECT or INCORRECT feedback with a function", () => {
    expect(turn.giveFeedback()).to.equal("Correct!");
    expect(wrongTurn.giveFeedback()).to.equal("Incorrect!");
  });
});
