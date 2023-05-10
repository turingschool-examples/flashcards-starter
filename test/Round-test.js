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
    //  'currentcard' property should start with first card in deck
    const currentCard = deck.cards[0];
    // console.log(currentCard);
    // 2. execution
    const round = createRound(deck, currentCard);
    // assertion
    expect(round.currentCard).to.deep.equal(currentCard);
  });

  it('should begin a default value of 0 turns', function() {
    // 1. setup
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck(card1, card2, card3);
    const currentCard = deck.cards[0];
    // let round = createRound(deck, currentCard);
    // 'turns' property that starts at 0
    const turns = 0;
    // 2. execution
    const round = createRound(deck, currentCard, turns);
    // 3. assertion
    expect(round.turns).to.equal(0);
  });

  it('should begin as an empty array and store incorrectly guessed cards during round', function() {
    // 1 Setup
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck(card1, card2, card3);
    const currentCard = deck.cards[0];
    const turns = 0;
    const incorrectGuesses = [];
    // 2 Execution 
    const round = createRound(deck, currentCard, turns, incorrectGuesses);
    // assertion
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});
