const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(2, 'What is the Beth\'s favortie food', ['tacos', 'burritos', 'pizza'], 'pizza')
    card3 = new Card(3, 'What is the best day of the week', ['monday', 'tuesday', 'friday'], 'friday')
    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be a new instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should be able to store an array of cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should should be able to count the amount of cards', () => {
    expect(deck.countCards()).to.be.equal(3)
  })

})
