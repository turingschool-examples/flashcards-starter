const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3, deck;
  
  beforeEach('card instances and deck instance', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);

  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be a stack of cards', () => {
    expect(deck.stack).to.be.an('array');
    expect(deck.stack[0]).to.be.an.instanceof(Card);
  });  

  it('should be a able to count the number of cards in the deck', () => {
    const countStack = deck.countCards()

    expect(countStack).to.be.a('number');
    expect(countStack).to.equal(3);
  });  

});