const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  var card1;
  var card2;
  var card3;
  var deck;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be able to instantate a Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should take an array as an arguement', function() {
    expect(deck.cards.length).to.equal(3);
  })

  it('should be able to count the cards', function() {
    expect(deck.countCards).to.be.a('function');
    expect(deck.countCards()).to.equal(3);
  })
})