const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turn");

describe("Deck", () => {
  it("should be initialized with an array of Card objects", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    expect(deck).to.have.property("cards").to.be.a("array");
    expect(deck).to.have.property("cards").to.deep.equal([card1, card2, card3]);
  });
  it("should know how many Cards are in the Deck", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    deck.countCards();
    expect(deck).to.have.property("cards").to.have.lengthOf(3);
    expect(deck.countCards()).to.equal(3);
  });
});
