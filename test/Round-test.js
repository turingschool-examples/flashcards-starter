const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { createCard } = require('../src/card')
const cards = require('../src/data')

const { start } = require('../src/game')
const deck = createDeck(cards.prototypeData)
const round = createRound(deck)

describe('deck', function() {
  let card1, card2, card3
  let deck

  beforeEach(() => {
     card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
     card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function', 'array'])
     card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
     deck = createDeck([card1, card2, card3])
    
  })
  
  it('should create a deck of cards and count them', function() {

    expect(countCards(deck)).to.deep.equal(3)
  })
})

describe('round', function(){
  it('should create a round object', function (){
    const round = createRound(deck)
    
    expect(round.deck).to.equal(deck.cards)
    expect(round.currentCard).to.equal(deck.cards[0])
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  })
  
  it('should have a deck property that holds the deck object', function(){
    expect(round.deck).to.equal(cards.prototypeData)
  })

  it('shoud start with the first card in the deck', function () {
    expect(round.currentCard).to.equal(deck.cards[0])
  })

  it('should start with turns at 0', function() {
    expect(round.turns).to.equal(0)
  })

  it('should start the round with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })
})

describe('take turn', function() {
  let deck, round
  
  beforeEach(() => {
    deck = createDeck(cards.prototypeData)
    round = createRound(deck)
  })
  
  it('should push the incorrect answer id into the incorrectGuesses array', function() {
    takeTurn('array', round)
    expect(round.incorrectGuesses).to.deep.equal([1])
  })
   
  it('should update the turn count when a correct or incorrect guess is made', function() {
    takeTurn('object', round)
    expect(round.turns).to.equal(1)
  })


  it('should change the currentCard to the next card in the deck', function() {
    expect(round.currentCard).to.equal(deck.cards[0])
  })

  it('should return feedback on if the guess is correct', function() {
    const feedback = takeTurn('mutator method', round)
    expect(feedback).to.equal('Correct!')
  })
  
  it('should return feedback if the guess is incorrect', function() {
    const badFeedback =  takeTurn('array', round)
    expect(badFeedback).to.equal('Incorrect!')
  })

  
})

describe('Calculate percent correct', function() {
  let deck, round
  
  beforeEach(() => {
    deck = createDeck(cards.prototypeData)
    round = createRound(deck)
  })

  it('should calculate the percentage of correct answers', function() {
    takeTurn('boolean', round)
    takeTurn('sort()', round)
    takeTurn('filter()', round)
    takeTurn('forEach', round)
    const percent = calculatePercentCorrect(round)

    expect(percent).to.equal (25)
  })

  describe('end round', function(){
    const deck = createDeck(cards.prototypeData)
    const round = createRound(deck)
    // const percent = calculatePercentCorrect(round)
    it('should print the end-game message and end the game', function() {
      takeTurn('object', round)
      takeTurn('function', round)
      takeTurn('accessor method', round)
      takeTurn('mutator method', round)
      const gameOverMessage = endRound(round)
      
      expect(gameOverMessage).to.equal(`** Round Over! ** You answered 25% of the questions correctly!`)
    })
  })
})