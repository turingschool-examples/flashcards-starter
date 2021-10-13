const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js")

describe("Deck", function() {

  it("should be a function", function() {
    let deck = new Deck();
    expect(Deck).to.be.a("function");
  });

  it.skip("should be an instance of Deck", function() {
    let deck = new Deck();
    expect(deck).to.be.a.instanceof(Deck);
  });

  it.skip("should contain cards", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    expect(deck.cards).to.equal(cards);
  });

  it.skip("should know how many cards are in the deck", function() {
    let card1 = new Card(1, "What's up?", ["the sky", "not much", "chicken butt"], "chicken butt");
    let card2 = new Card(2, "Who's the cutest?", ["Percy", "Rufus", "Desilu"], "Desilu");
    let card3 = new Card(3, "Worst food ever?", ["olives", "pretzels", "pickles"], "olives");
    let card4 = new Card(4, "Best food ever?", ["cheese", "pickles", "cheese and pickles"], "cheese and pickles");
    let cards = [card1, card2, card3, card4];
    let deck = new Deck(cards);
    deck.countCards();
    expect(deck.countCards()).to.equal(4);
  });

})
