const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe ('Deck', function(){
  let card
  let card2
  let card3
  let deck

  beforeEach(() => {
    card = new Card(1, '', [], '')
    card2 = new Card(2, '', [], '')
    card3 = new Card(3, '', [], '')
    deck = new Deck([card, card2, card3])
  })

  it('should be a function', function(){
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of', function(){
    expect(deck).to.be.a.instanceof(Deck)
  })
  
  it('should be able to count the amount of cards', function(){
    expect(deck.countCards()).to.equal(3)
  })

})
