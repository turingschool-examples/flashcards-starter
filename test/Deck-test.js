const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', () => {
  let cards, deck;

  beforeEach(() => {
    cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    deck = new Deck(cards)
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should accept an array of cards as an argument', () => {
    expect(deck.cards[0]).to.deep.equal(cards[0]);
    expect(deck.cards[1]).to.deep.equal(cards[1]);
    expect(deck.cards[4]).to.deep.equal(cards[4]);
  });

  it('should be able to count the number of cards in the deck', () => {
    expect(deck.countCards()).to.equal(30);
    deck.cards.pop();
    expect(deck.countCards()).to.equal(29);
    deck.cards.pop();
    deck.cards.pop();
    expect(deck.countCards()).to.equal(27);
    deck.cards.push(cards[0]);
    expect(deck.countCards()).to.equal(28);
  });
});