const chai = require("chai");
const expect = chai.expect;

const {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
} = require("../src/card");

describe("card", function () {
  it("should be a function", function () {
    expect(createCard).to.be.a("function");
  });

  it("should create a card and its properties", function () {
    const card = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      "What allows you to define a set of related information using key-value pairs?"
    );
    expect(card.answers).to.deep.equal(["object", "array", "function"]);
    expect(card.correctAnswer).to.equal("object");
  });

  it("evaluate guess should be a function", function () {
    expect(evaluateGuess).to.be.a("function");
  });

  it("should evaluate whether a player's guess is correct", function () {
    const card = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );

    const rightAnswer = evaluateGuess("sea otter", card);

    expect(rightAnswer).to.equal("correct!");
  });

  it("should evaluate if a player's guess is incorrect", function () {
    const card = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );

    const wrongAnswer = evaluateGuess("pug", card);

    expect(wrongAnswer).to.equal("incorrect!");
  });
});

describe("deck", function () {
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

  it("should be a function", function () {
    expect(createDeck).to.be.a("function");
  });

  it("should create a deck", function () {
    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.deep.equal([card1, card2, card3]);
  });

  it("should count the cards in a deck", function () {
    const deck = createDeck([card1, card2, card3]);

    const deckCount = countCards(deck);
    expect(deckCount).to.equal(3);
  });
});
