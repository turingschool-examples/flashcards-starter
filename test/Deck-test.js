const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should have an array of Card objects', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', 
      ['sea otter', 'pug', 'capybara'], 
      'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 
      'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', 
      ['Lex', 'William', 'Fitzgerald'], 
      'Fitzgerald');
  
    const deck = new Deck([card1, card2, card3]);
    expect(deck.deckCards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards in the deck', function() {
    const card1 = new Card(3, 'What is Sarah\'s favorite animal', 
      ['dog', 'cat', 'hamster'], 
      'dog');
    const card2 = new Card(21, 'What organ is Fitz missing?', 
      ['spleen', 'appendix', 'gallbladder'], 
      'appendix');
    const card3 = new Card(32, 'What is Devin\'s middle name?', 
      ['William', 'Patrick', 'Fitzgerald'], 
      'Patrick');
    const card4 = new Card(15, 'What bone is commonly called the funny bone', 
      ['Femur', 'humerus', 'ulna'], 
      'humerus');
    
    const deck = new Deck([card1, card2, card3, card4]); 
    expect(deck.countCards()).to.deep.equal(4);
  });

}); 