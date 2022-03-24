const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let cardOne, cardTwo, cards, deck

  cardOne = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")

  cardTwo = new Card(2, "What is a comma-separated list of related values?",["array", "object", "function"], "array");
  cards = [cardOne, cardTwo]
  deck = new Deck(cards);

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should count how many cards are in deck', () => {
    const countCards = deck.countCards();
    expect(countCards).to.equal(2);
  })
});
