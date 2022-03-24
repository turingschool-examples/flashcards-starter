const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

describe('Deck', function() {

  it('should be a function', function() {
    console.log('deck[0]', this.currentCard)
    const deck = new Deck([card1, card2, card3]);
    expect(Deck).to.be.a('function');
  })

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should contain an array of cards', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it.skip('should know how many Cards are in the Deck', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3)
  })
})
