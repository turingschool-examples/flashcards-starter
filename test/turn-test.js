const chai = require("chai");
const expect = chai.expect;

const { evaluateGuess } = require("../src/turn");
const { createCard } = require("../src/card");

describe("Evaluate", () => {
  it("Should return 'correct!' on correct response", () => {
    const card = createCard(
      1,
      "What number is 1?",
      ["one", "two", "three"],
      "one"
    );
    const response = evaluateGuess("one", card.correctAnswer);
    expect(response).to.equal("correct!");
  });

  it("Should return 'incorrect!' on correct response", () => {
    const card = createCard(
      1,
      "What number is 1?",
      ["one", "two", "three"],
      "one"
    );
    const response = evaluateGuess("two", card.correctAnswer);
    expect(response).to.equal("incorrect!");
  });
});
