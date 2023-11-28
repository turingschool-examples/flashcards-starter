const chai = require('chai');
const expect = chai.expect;
const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('createDeck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create a deck array of card objects', function() {
    //SETUP
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    //EXECUTION
    const deck = createDeck(cards);
    //ASSERTION
    expect(deck[0].id).to.equal(1);
    expect(deck[1].correctAnswer).to.equal('gallbladder');
    expect(deck[2].answers).to.deep.equal(['Lex', 'William', 'Fitzgerald']);
  });  
});

describe('countCards', function() {
  it('should be a function', function() {
    expect(countCards).to.be.a('function');
  });

  it('should calculate the number of cards in a deck', function() {
    //SETUP
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);
    //EXECUTION
    const cardCount = countCards(deck);
    //ASSERTION
    expect(cardCount).to.equal('3');
  });  
});
