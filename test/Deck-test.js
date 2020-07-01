const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data');

describe('Deck', function() {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });
  
  it('should be initialized with an array of card objects', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });
  
  it('should store infromation from card objects', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    
    expect(deck.cards[2].id).to.equal(12);
  });
  
  it('should tell us how many cards are in the deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
    const deck = new Deck([card1, card2, card3]);
    const howManyCards = deck.countCards();

    expect(howManyCards).to.equal(3);
  });
  
  
  it('should tell us how many cards are in the deck for any possible amount of cards', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(37, 'Why is the guitar like this?', ['physics', 'hippies', 'cus this is the guitar'], 'cus this is the guitar');
    
    const deck = new Deck([card1, card2, card3, card4]);
    const howManyCards = deck.countCards();
    
    expect(howManyCards).to.equal(4);
  });

  it('should still tell us how many cards are in the deck for any possible amount of cards', () => {
    const data = prototypeData.prototypeData;
    const deck = new Deck(data);
    const howManyCards = deck.countCards();
    
    expect(howManyCards).to.equal(30);
  });
});