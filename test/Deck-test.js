const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {

  let card1;
  let card2;
  let card3;
  let defaultDeck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', 
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    defaultDeck = new Deck([card1, card2, card3]);
  });

  it('should be an instance of Deck', () => {
    expect(defaultDeck).to.be.an.instanceOf(Deck);
  });

  it('should take an array of cards', () => {
    expect(defaultDeck.deckCards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', () => {
    const cardCount = defaultDeck.countCards();

    expect(cardCount).to.equal(3);
  });
});