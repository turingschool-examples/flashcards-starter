const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  beforeEach(function() {
    deck = new Deck();
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })

  it('should be a new instance of Deck', function() {
    expect(deck).to.be.a.instanceOf(Deck)
  })

  it('should count how many cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    let deck = new Deck([card1, card2, card3])
    console.log(deck)
    expect(deck.countCards()).to.equal(3)
  })
})
