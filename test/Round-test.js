const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3, card4, deck, round 

  beforeEach(function() {
    card1 = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    card2 = new Card(2, 'What does the callback function for the map() method take in?', ["current element", "initializer", "boolean"], 'current element')
    card3 = new Card(3, 'What does the callback function for reduce() return?', ["the accumulator", "the current element", "the initializer"], 'the accumulator')
    card4 = new Card(4, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()')
    deck = new Deck([card1, card2, card3, card4])
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should exist and be able to store deck of cards', function() {
    expect(round.deck).to.be.an.instanceOf(Deck)
    expect(round.deck.cards).to.deep.equal([card1, card2, card3, card4])
  })

  it('should start with 0 turns', function() {
    expect(round.turnCounter).to.equal(0)
  })

  it('should start with an empty array', function() {
    expect(round.incorrectCards).to.deep.equal([])
  })

  describe('returnCurrentCard', function() {
    it('should return the current card being played in deck', function() {
      const currentCard = round.returnCurrentCard()

      expect(currentCard).to.equal(card1)
    })
  })

  describe('takeTurn', function() {
    it('should increase turn counter by one each turn', function() {
      round.takeTurn('current element')
      round.takeTurn('initializer')
     
       expect(round.turnCounter).to.equal(2)
    })

    it('should be able to shuffle to the next card', function() {
      round.takeTurn('current element')
      const nextCard = round.returnCurrentCard()

      expect(nextCard).to.equal(card2)
    })

    it('should be able to shovel incorrect cards into array by id', function() {
      round.takeTurn('callback function')
      round.takeTurn('boolean')
      round.takeTurn('an array')
      round.takeTurn('Object.keys()')

      expect(round.incorrectCards).to.deep.equal([2, 3])
    })
  })

  describe('calculatePercentCorrect', function() {
    it('should be able to calculate and return percentage of correct guesses', function () {
      round.takeTurn('callback function')
      round.takeTurn('boolean')
      round.takeTurn('an array')
      round.takeTurn('Object.keys()')

      const correctCards = round.calculatePercentCorrect()

      expect(correctCards).to.equal(50)
    })
  })

  describe('endRound', function() {
    it('should return "**Round over!** You answered 50% of the questions correctly!"', function() {
      round.takeTurn('callback function')
      round.takeTurn('boolean')
      round.takeTurn('an array')
      round.takeTurn('Object.keys()')

      const result = round.endRound()

      expect(result).to.equal('**Round over!** You answered 50% of the questions correctly!')
    })
  })
})


