const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Deck", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  
  beforeEach(() => {
    card1 = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    card2 = new Card(14, "What organ is Khalid missing?", ["spleen", "appendix", "gallbladder"], "gallbladder");
    card3 = new Card(12, "What is Travis's middle name?", ["Lex", "William", "Fitzgerald"], "Fitzgerald");
    deck = new Deck([card1, card2, card3]);
  });

  it("should be an instance of Deck", () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should take in an array of cards", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should have a method to count cards", () => {
    let cardCount = deck.countCards();
    expect(cardCount).to.equal(3);
  });
});