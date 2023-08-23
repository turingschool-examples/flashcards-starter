const chai = require("chai");
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
} = require("../src/card");

const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require("../src/game");
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

  it("should end a round", function () {
    const round = createRound(deck);

    const rightAnswer = takeTurn("sea otter", round);

    const wrongAnswer = takeTurn("doggy", round);

    const endRoundStatement = endRound(round);

    expect(endRoundStatement).to.equal(
      `** Round over! ** You answered 50% of the questions correctly!`
    );
  });
});

describe("takeTurn", function () {
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

  // beforeEach(function () {
  //   const round = createRound(deck);
  // });

  it("happy path - should update turn count, evaluate guesses, and provide feedback", function () {
    const round = createRound(deck);
    const rightAnswer = takeTurn("sea otter", round);

    expect(round.turns).to.equal(1);

    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.currentCard).to.deep.equal(card2);

    expect(rightAnswer).to.equal(`correct!`);
  });
  it("more than one turn is taken", function () {
    const round = createRound(deck);
    const rightAnswer = takeTurn("sea otter", round);

    const rightAnswer2 = takeTurn("gallbladder", round);

    expect(round.turns).to.equal(2);

    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.currentCard).to.deep.equal(card3);

    expect(rightAnswer2).to.equal(`correct!`);
  });

  it("sad path - should update turn count, currentCard is updated, id of incorrect guess is stored, and appropriate feedback is provided", function () {
    const round = createRound(deck);
    const wrongAnswer = takeTurn("pug", round);

    expect(round.turns).to.equal(1);

    expect(round.incorrectGuesses).to.deep.equal([1]);

    expect(round.currentCard).to.deep.equal(card2);

    expect(wrongAnswer).to.equal(`incorrect!`);
  });

  it("calculates percentage correct", function () {
    const round = createRound(deck);
    const rightAnswer = takeTurn("sea otter", round);
    const rightAnswer2 = takeTurn("gallbladder", round);
    const wrongAnswer3 = takeTurn("Lex", round);

    const percent = calculatePercentCorrect(round);

    expect(percent).to.equal(66);
  });
});
