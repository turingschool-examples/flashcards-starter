const chai = require("chai");
const expect = chai.expect;

const {
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require("../src/deck");
const { createCard } = require("../src/card");

let card1, card2, card3, deck, round;

describe("deck", function () {
  beforeEach(function () {
    card1 = createCard(
      1,
      "What is my favorite food",
      ["pizza", "burritos", "hamburgers"],
      "burritos"
    );
    card2 = createCard(
      2,
      "What is my favorite color",
      ["blue", "orange", "purple"],
      "orange"
    );
    card3 = createCard(
      3,
      "Where did I grow up",
      ["Michigan", "Canada", "Florida"],
      "Michigan"
    );
    deck = createDeck([card1, card2, card3]);
  });

  it("should be a function", function () {
    expect(createDeck).to.be.a("function");
  });

  it("should create a deck with multiple cards", function () {
    expect(deck).to.deep.equal([
      {
        id: 1,
        question: "What is my favorite food",
        answers: ["pizza", "burritos", "hamburgers"],
        correctAnswer: "burritos",
      },
      {
        id: 2,
        question: "What is my favorite color",
        answers: ["blue", "orange", "purple"],
        correctAnswer: "orange",
      },
      {
        id: 3,
        question: "Where did I grow up",
        answers: ["Michigan", "Canada", "Florida"],
        correctAnswer: "Michigan",
      },
    ]);
  });
});

describe("count", function () {
  beforeEach(function () {
    card1 = createCard(
      1,
      "What is my favorite food",
      ["pizza", "burritos", "hamburgers"],
      "burritos"
    );
    card2 = createCard(
      2,
      "What is my favorite color",
      ["blue", "orange", "purple"],
      "orange"
    );
    card3 = createCard(
      3,
      "Where did I grow up",
      ["Michigan", "Canada", "Florida"],
      "Michigan"
    );
    deck = createDeck([card1, card2, card3]);
  });

  it("should be a function", function () {
    expect(countCards).to.be.a("function");
  });

  it("should count the cards in a given deck", function () {
    const count = countCards(deck);
    expect(count).to.equal(3);
  });
});
