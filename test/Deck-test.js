const { util } = require('chai');
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe(`Deck`, () => {
  let card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  let card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  let card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  let cards = [card1, card2, card3];
  let deck;

  it.skip(`should be initialized with an array of Card objects`, () => {
    deck = new Deck(cards);

    expect(deck.cards).to.equal(cards);
  })
})