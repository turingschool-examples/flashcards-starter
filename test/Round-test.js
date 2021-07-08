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
    // console.log(round.deck)
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

  describe('takeTurn', function() {
    it('should increase by one each turn', function() {
      round.takeTurn('current element')
      round.takeTurn('an array')
      // console.log(round.turnCounter)
      expect(round.turnCounter).to.equal(2)
    })

    })
  })
})

// takeTurn(guess)
// should create a new turn instance each time a guess is made
// should be able to add one to the turn counter each turn
// should be able to shuffle to next card in deck
// should be able to evaluate correct
// should be able to evaluate incorrect 
// should be able to shovel incorrect guesses into array
// should be able to return feedback - turn.giveFeedback()

// calculatePercentCorrect()
// should be able to calculate total number of correct guesses
// should be able to return percentage of correct guesses

// endRound()
// should be able to return 'Round over! You answered 25% of the questions correctly!'
