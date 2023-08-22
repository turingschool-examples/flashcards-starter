const chai = require("chai");
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
} = require("../src/card");

const { createRound } = require("../src/game");
describe("round", function () {
  const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ["sea otter", "pug", "capybara"],
    "sea otter"
  );
  const card2 = createCard(
    14,
    "What organ is Khalid missing?",
    ["spleen", "appendix", "gallbladder"],
    "gallbladder"
  );
  const card3 = createCard(
    12,
    "What is Travis's middle name?",
    ["Lex", "William", "Fitzgerald"],
    "Fitzgerald"
  );

  const deck = createDeck([card1, card2, card3]);

  it("should be a function", function () {
    expect(createRound).to.be.a("function");
  });

  it("should create a round", function () {
    const round = createRound(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});
