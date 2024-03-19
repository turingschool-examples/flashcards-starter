const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { createDeck } = require("../src/deck");
const { createRound, takeTurn } = require("../src/round");

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

  it("make a round", () => {
    const round = createRound(deck);
    expect(round).to.deep.equal({
      deck: deck,
      currentCard: deck[0],
      turns: 0,
      incorrectGuesses: [],
    });
  });

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
