const chai = require("chai");
const assert = chai.assert;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
  let card1 = new Card(1, "What is Robbie's favorite animal", ["sea otter", "pug", "capybara"], "sea otter");
  let card2 = new Card(14, "What organ is Khalid missing?", ["spleen", "appendix", "gallbladder"], "gallbladder");
  let card3 = new Card(12, "What is Travis's middle name?", ["Lex", "William", "Fitzgerald"], "Fitzgerald");
  let deck = new Deck([card1, card2, card3]);

  it("Should takes in an array as argument", () => {
    assert.isArray(deck.cards);
  });

  it("Should count how many cards in the deck", () => {
    assert.equal(deck.countCards(), 3);
  });
});
