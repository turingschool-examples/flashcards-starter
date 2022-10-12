const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

describe('Deck', () => {

  let card1
  let card2
  let card3
  let deck

  beforeEach(() => {
    card1 = new Card(1, 'What is the capital of Texas?', ['Austin', 'Houston', 'Dallas'], 'Austin')
    card2 = new Card(2, 'What is the capital of Louisiana?', ['New Orleans', 'Lafayette', 'Lake Charles'], 'New Orleans')
    card3 = new Card(3, 'What is the capital of Colorado?', ['Boulder', 'Denver', 'Aspen'], 'Denver')
    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', () => {
    const deck = new Deck()
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should store an array', () => {
    expect(deck.cardCollection).to.be.an('array')
  })

  it('should only contain Card objects in the array', () => {
    for (var i = 0; i < deck.cardCollection.length; i++) {
      expect(deck.cardCollection[i]).to.be.an('object')
    }
  })

  it('should return length of card collection array with the method countCards()', () => {
    expect(deck.countCards()).to.equal(3)
  })
})