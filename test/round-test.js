const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { createDeck } = require("../src/deck");
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
  resetRound,
} = require("../src/round");

describe("round", () => {
  const card1 = createCard(
    1,
    "What is my name?",
    ["Charles", "Bob", "Bill"],
    "Charles"
  );
  const card2 = createCard(
    2,
    "How many pennies are in a dollar?",
    ["100", "50", "25"],
    "100"
  );
  const card3 = createCard(
    3,
    "Who is Batman?",
    ["Wally West", "Bruce Wayne", "Clark Kent"],
    "Bruce Wayne"
  );

  const deck = createDeck([card1, card2, card3]);

  describe("Round", () => {
    it("make a round", () => {
      const round = createRound(deck);
      expect(round).to.deep.include({
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
      });
    });

    it("round will have a timer start", () => {
      const round = createRound(deck);
      expect(round).to.have.property("startTimer");
    });
  });

  describe("Take a Turn", () => {
    it("will take turn and if correct", () => {
      const round = createRound(deck);

      expect(takeTurn("Charles", round)).to.equal("correct!");
      expect(round.turns).to.equal(1);
      expect(round.currentCard).to.deep.equal(deck[1]);
      expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it("will take turn and if incorrect", () => {
      const round = createRound(deck);

      expect(takeTurn("Bob", round)).to.equal("incorrect!");
      expect(round.turns).to.equal(1);
      expect(round.currentCard).to.deep.equal(deck[1]);
      expect(round.incorrectGuesses).to.deep.equal([deck[0].id]);
    });

    it("will take multiple turns", () => {
      const round = createRound(deck);

      expect(takeTurn("Charles", round)).to.equal("correct!");
      expect(round.turns).to.equal(1);
      expect(round.currentCard).to.deep.equal(deck[1]);
      expect(round.incorrectGuesses).to.deep.equal([]);

      expect(takeTurn("25", round)).to.equal("incorrect!");
      expect(round.turns).to.equal(2);
      expect(round.currentCard).to.deep.equal(deck[2]);
      expect(round.incorrectGuesses).to.deep.equal([deck[1].id]);

      expect(takeTurn("Bruce Wayne", round)).to.equal("correct!");
      expect(round.turns).to.equal(3);
      expect(round.currentCard).to.deep.equal(deck[3]);
      expect(round.incorrectGuesses).to.deep.equal([deck[1].id]);
    });
  });

  describe("Find Percentage", () => {
    it("Find percentage (#1)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      const percentage = calculatePercentCorrect(round);
      expect(percentage).to.equal(50);
    });

    it("Find percentage (#2)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      const percentage = calculatePercentCorrect(round);
      expect(percentage).to.equal(100);
    });

    it("Find percentage (#3)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      takeTurn("Bruce Wayne", round);
      const percentage = calculatePercentCorrect(round);
      expect(percentage).to.equal(66);
    });
  });

  describe("End round", () => {
    it("End round message (#1)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      takeTurn("Bruce Wayne", round);
      expect(endRound(round)).to.equal(
        "** Round over! ** You answered 66% of the questions correctly!"
      );
    });

    it("End round message (#2)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      expect(endRound(round)).to.equal(
        "** Round over! ** You answered 50% of the questions correctly!"
      );
    });
  });

  describe("Review material", () => {
    it("Will reset round to redo material (#1)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      takeTurn("Bruce Wayne", round);
      expect(resetRound(round)).to.deep.equal(createRound(deck));
    });

    it("Will reset round to redo material (#2)", () => {
      const round = createRound(deck);
      takeTurn("Charles", round);
      takeTurn("25", round);
      expect(resetRound(round)).to.deep.equal(createRound(deck));
    });
  });
});
