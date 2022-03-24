const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Round", () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, "What is Robbie's favorite animal?", ["sea otter", "pug", "capybara"], "sea otter");
    card2 = new Card(14, "What organ is Khalid missing?", ["spleen", "appendix", "gallbladder"], "gallbladder");
    card3 = new Card(12, "What is Travis's middle name?", ["Lex", "William", "Fitzgerald"], "Fitzgerald");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  it("should be an instance of Round", () => {
    expect(round).to.be.an.instanceof(Round);
  });
  it("should pass in a deck", () => {
    expect(round.deck).to.be.an.instanceof(Deck);
  });
  it("should have a method to return current card", () => {
    let currCard = round.returnCurrentCard();
    expect(currCard).to.deep.equal(card1);
  });
  it("should have a turn counter", () => {
    expect(round.turns).to.equal(0);
  });
});