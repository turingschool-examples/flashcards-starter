const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/round');

describe('Round', function() {
  let round;
  let deck;

  beforeEach(() => {
    const card1 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck();
    round = new Round(deck, card1);

    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should have a deck', () => {
    expect(round.deck).to.be.a('object');
  });

  it('should have a current card', () => {
    expect(round.currentCard).to.be.a('object');
  });

})
