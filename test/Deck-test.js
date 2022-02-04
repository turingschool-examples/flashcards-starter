const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card.js')
const Deck = require('../src/Deck.js')

describe('Deck', function () {

  // it('should should be initialized with an array of card', function() {
  //
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  //
  //
  //   const deck = new Deck([card1, card2, card3]);
  //
  //   expect(deck.firstCard).to.equal(card1)
  //   expect(deck.secondCard).to.equal(card2)
  //   expect(deck.thirdCard).to.equal(card3)
  // })

  it('should have a method that counts and returns the number of cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3)
  })
})
