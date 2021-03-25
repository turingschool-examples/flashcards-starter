const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  let card;

  beforeEach(() => {
    deck = new Deck();
    card = new Card(1, 'What is Ellie\'s favorite food?', ['sushi', 'beans', 'tomato pie'], 'sushi');
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an array', () => {
    expect(deck.cards).to.be.a('array');
  });

  it('should add a new card to the cards array', () => {
    const card1 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck.addCard(card);
    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);

    expect(deck.cards).to.deep.equal([{id: 1, question: 'What is Ellie\'s favorite food?', answers: ['sushi', 'beans', 'tomato pie'], correctAnswer: 'sushi'},
    {id: 2, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'},
    {id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'},
    {id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'}]);
  });

  it('should be able to count cards', () => {
    const card1 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck.addCard(card);
    deck.addCard(card1);
    deck.addCard(card2);
    deck.addCard(card3);

    expect(deck.countCards()).to.equal(4);
    expect(deck.cards.length).to.be.a('number');
  });

})
