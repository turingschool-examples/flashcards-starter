const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {

  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 
      'sea otter');

    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 
      'gallbladder');

    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 
      'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
  });

  it('Should return the length of the deck.', function () {

    deck.countingCards()

    expect(deck.countingCards()).to.equal(3)
  });
});