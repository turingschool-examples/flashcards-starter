const chai = require("chai");
const expect = chai.expect;

const { createDeck } = require("../src/deck");
const { createCard } = require("../src/card");
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require("../src/round");

let card1, card2, card3, deck, round;

describe("round", function () {
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
    expect(createRound).to.be.a("function");
  });

  it("should be an object that stores info about the game", function () {
    const round = createRound(deck);
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is my favorite food",
      answers: ["pizza", "burritos", "hamburgers"],
      correctAnswer: "burritos",
    });
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe("take turn", function () {
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
    round = createRound(deck);
  });

  it("should be a function", function () {
    expect(takeTurn).to.be.a("function");
  });

  it("should update the turn count when a guess is made", function () {
    const turn = takeTurn("pizza", round);
    expect(round.turns).to.equal(1);
  });

  it("should return correct for correct answers", function () {
    const turn = takeTurn("burritos", round);
    expect(turn).to.equal("Correct");
  });

  it("should return incorrect for incorrect answers", function () {
    const turn = takeTurn("pizza", round);
    expect(turn).to.equal("Incorrect");
  });

  it("should update the incorrect guesses if an answer is incorrect", function () {
    const turn = takeTurn("pizza", round);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it("should update the current card to the next card in the deck", function () {
    const turn = takeTurn("burritos", round);
    expect(round.currentCard).to.deep.equal({
      id: 2,
      question: "What is my favorite color",
      answers: ["blue", "orange", "purple"],
      correctAnswer: "orange",
    });
  });

  it("should update the incorrect guesses on another turn", function () {
    const turn = takeTurn("pizza", round);
    const takeNextTurn = takeTurn("purple", round);
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
  });
});

describe("calculate percent function", function () {
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
    round = createRound(deck);
  });

  it("should be a function", function () {
    expect(calculatePercentCorrect).to.be.a("function");
  });

  it("shold calculate the percentage of correct vs. incorrect answers", function () {
    const firstTurn = takeTurn("pizza", round);
    const secondTurn = takeTurn("purple", round);
    const thirdTurn = takeTurn("Michigan", round);
    const correctPercentage = calculatePercentCorrect(round);
    expect(correctPercentage).to.equal(33);
  });

  it("should calculate the percentage of another round", function () {
    const firstTurn = takeTurn("burritos", round);
    const secondTurn = takeTurn("purple", round);
    const thirdTurn = takeTurn("Michigan", round);
    const correctPercentage = calculatePercentCorrect(round);
    expect(correctPercentage).to.equal(66);
  });
});

describe("end round", function () {
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
    round = createRound(deck);
  });

  it("should be a function", function () {
    expect(endRound).to.be.a("function");
  });

  it("should declare Round Over! and show the percentage of questions answered correctly when a round is over", function () {
    const firstTurn = takeTurn("burritos", round);
    const secondTurn = takeTurn("purple", round);
    const thirdTurn = takeTurn("Michigan", round);
    const correctPercentage = calculatePercentCorrect(round);
    const roundOver = endRound(round);
    expect(roundOver).to.equal(
      "Round Over! You answered 66% of the questions correctly"
    );
  });
});

