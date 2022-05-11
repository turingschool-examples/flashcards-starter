const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe("Deck", () => {
    let deck;
    let card1;
    let card2;
    let card3;
  
    beforeEach(() => {
      card1 = new Card(
        1,
        "What allows you to define a set of related information using key-value pairs?",
        ["object", "array", "function"],
        "object"
      );
      card2 = new Card(
        29,
        "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
        ["true", "false"],
        "true"
      );
      card3 = new Card(
        27,
        "Accessor methods permanently modify the original array, mutator methods do not.",
        ["true", "false"],
        "false"
      );
      deck = new Deck([card1, card2, card3]);
    });

    it("should be a function", () => {
      const deck = new Deck();
      expect(Deck).to.be.a("function");
    });
  
    it("should be an instance of Deck", () => {
      const deck = new Deck();
      expect(deck).to.be.an.instanceOf(Deck);
    });

  it("should have several cards in the deck", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should know how many Cards are in the Deck", () => {
    expect(deck.countCards()).to.equal(3);
  });
});