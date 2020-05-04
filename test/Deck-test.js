const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck1;
  let deck2;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck1 = new Deck([card1, card2, card3])
    deck2 = new Deck([card2, card3])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  }) 

  it('should be an instance of Deck', () => {
    expect(deck1).to.be.an.instanceOf(Deck)
  }) 

  it('should be able to count the cards in the deck', () => {
    expect(deck1.countCards()).to.equal(3)
    expect(deck2.countCards()).to.equal(2)
  }) 
})