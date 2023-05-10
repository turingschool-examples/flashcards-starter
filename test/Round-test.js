const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck} = require('../src/deck');
const { createRound, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a deck property that holds onto the deck object', function() {
    // 1. setup: create mock data
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // deck property that holds onto the 'deck' object
    const deck = createDeck(card1, card2, card3);
    // 2. execution
    const round = createRound(deck);
    // 3. assertion
    expect(round.deck).to.deep.equal(deck);
  });

  it('should start with the first in the deck', function() {
    // 1. setup: create mock data
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // deck property that holds onto the 'deck' object
    const deck = createDeck(card1, card2, card3);
    console.log(deck.cards[0]);
    //  'currentcard' property should start with first card in deck
    const currentCard = deck.cards[0];
    // console.log(currentCard);
    // 2. execution
    const round = createRound(deck, currentCard);
    // assertion
    expect(round.currentCard).to.deep.equal(currentCard);
  });
});




