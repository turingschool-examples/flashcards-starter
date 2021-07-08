const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', function() {
  let card1, card2, card3, card4, deck

  beforeEach(function() {
    card1 = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    card2 = new Card(2, 'What does the callback function for the map() method take in?', ["current element", "initializer", "boolean"], 'current element')
    card3 = new Card(3, 'What does the callback function for reduce() return?', ["the accumulator", "the current element", "the initializer"], 'the accumulator')
    card4 = new Card(4, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()')
    deck = new Deck([card1, card2, card3, card4])
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })

  it('should be able to store cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3, card4])
  })

  describe('cardCount()', function() {
    it('should be able to count cards in deck', function() { 
      const numCards = deck.cardCount()

      expect(numCards).to.equal(4)
    })
  })
})

  