const chai = require("chai");
const expect = chai.expect;
const { createRound, takeTurn, endRound } = require("../src/card.js");

describe("createRound", function () {
  it("should be a function", function () {
    expect(createRound).to.be.a("function");
  });

  it("should create a round object with correct properties", function () {
    const card1 = { id: 1, correctAnswer: "A" };
    const card2 = { id: 2, correctAnswer: "B" };
    const deck = { cards: [card1, card2] };

    const round = createRound(deck);

    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

describe("takeTurn", function () {
  it("should be a function", function () {
    expect(takeTurn).to.be.a("function");
  });
  it("should correctly evaluate a correct guess", function () {
    const card1 = { id: 1, correctAnswer: "A" };
    const card2 = { id: 2, correctAnswer: "B" };
    const deck = { cards: [card1, card2] };
    const round = createRound(deck);

    const result = takeTurn("A", round);

    expect(result).to.equal("correct!");
    expect(round.currentCard).to.equal(card2);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should correctly evaluate an incorrect guess", function () {
    const card1 = { id: 1, correctAnswer: "A" };
    const card2 = { id: 2, correctAnswer: "B" };
    const deck = { cards: [card1, card2] };
    const round = createRound(deck);

    const result = takeTurn("B", round);

    expect(result).to.equal("incorrect!");
    expect(round.currentCard).to.equal(card2);
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
});

describe("endRound", function () {
  it("should be a function", function () {
    expect(endRound).to.be.a("function");
  });
  it("should return the correct message", function () {
    const round = {
      turns: 4,
      incorrectGuesses: [1, 2],
    };

    const result = endRound(round);

    expect(result).to.equal(
      `** Round over! ** You answered 50% of the questions correctly!`
    );
  });
});
