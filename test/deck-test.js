const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck.js');
const { countCards } = require('../src/deck.js');
const { createCard } = require('../src/card.js');

describe('deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create an array of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.deep.equal([
      {
        id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      },
      {
        id: 14,
        question: 'What organ is Khalid missing?',
        answers: ['spleen', 'appendix', 'gallbladder'],
        correctAnswer: 'gallbladder'
      },
      {
        id: 12,
        question: 'What is Travis\'s middle name?',
        answers: ['Lex', 'William', 'Fitzgerald'],
        correctAnswer: 'Fitzgerald'
      },
    ]); 
  });

  it('should count the number of cards in the deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3]);
    const count = countCards(deck);

    expect(count).to.equal(3);
  });
});