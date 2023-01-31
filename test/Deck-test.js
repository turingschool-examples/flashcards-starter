const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1, card2, card3, card4, card5, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Joe\'s favorite color?', ['orange', 'purple', 'yellow', 'red'], 'orange');
    card2 = new Card(2, 'What is the capital of Pennsylvania?', ['Idaho', 'Pittsburgh', 'Harrisburg', 'Paris'], 'Harrisburg');
    card3 = new Card(3, 'Can you not?', ['NO WAY', 'Maybe??', 'YEP', 'A little'], 'YEP');
    card4 = new Card(4, 'How old is Joe?', [15, 29, 42, 20], 29);
    card5 = new Card(5, 'Where does Joe live?', ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Paris'], 'Philadelphia');

    let cards = [card1, card2, card3, card4, card5];

    deck = new Deck(cards)
  });

  it ('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it ('should accept an array of cards as an argument', () => {
    expect(deck.cards[0]).to.deep.equal(card1);
    expect(deck.cards[1]).to.deep.equal(card2);
    expect(deck.cards[4]).to.deep.equal(card5);
  });

  it('should be able to count the number of cards in the deck', () => {
    expect(deck.countCards()).to.equal(5);
    deck.cards.pop();
    expect(deck.countCards()).to.equal(4);
    deck.cards.pop();
    deck.cards.pop();
    expect(deck.countCards()).to.equal(2);
    deck.cards.push(card5);
    expect(deck.countCards()).to.equal(3);
  });
})