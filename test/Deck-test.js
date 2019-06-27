const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

var card1, card2, card3, deck;

describe('Deck', function() {

  beforeEach( function() {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    deck = new Deck([card1,card2,card3]);
  })

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
});

  it('should be able to store a list of cards as an array of card objects', function() {
    expect(deck.cards).to.eql([card1, card2, card3])
  })

  it('should know how many cards are in the deck', function() {
    expect(deck.countDeck()).to.eql(3)
  });
});
