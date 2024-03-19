const chai = require("chai");
const expect = chai.expect;

const { createCard } = require("../src/card");
const { createDeck, countCards } = require("../src/deck");

describe("deck", () => {
  it("should be able to create a deck", () => {
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
    expect(deck).to.deep.equal([card1, card2, card3]);
  });

  it("can count cards in a deck", () => {
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
    const cardCount = countCards(deck);
    expect(cardCount).to.equal(3);
  });
});
