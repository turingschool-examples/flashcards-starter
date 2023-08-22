const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards, createRound, takeTurn, calculatePercenteCorrect} = require('../src/round');
const cards = require('../src/data')
const deck = createDeck(cards.prototypeData)
const round = createRound(deck)

const { start } = require('../src/game')

describe('deck', function() {
  it('should create a deck of cards and count them', function() {
   expect(countCards(deck)).to.deep.equal(30)
  })
})

describe('round', function(){
  it('should create a round object', function (){
    expect(createRound(deck)).to.be.a('object')
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
   it('should update the turn count when a correct or incorrect guess is made', function() {
   takeTurn('object', round)
   expect(round.turns).to.equal(1)
  })

  // it('should increase the number of turns upon multiple guesses', function () {
  //   takeTurn(guess, round);
  //   takeTurn(guess, round);
  //   takeTurn(guess, round);
  //   expect(round.turns).to.equal.apply(3)
  // })

  it('should push the incorrect answer id into the incorrectAnswers array', function() {
    takeTurn('object', round)
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should change the currentCard to the next card in the deck', function() {
    expect(round.currentCard).to.equal(deck.cards[1])
  })

  it('should return feedback on if the guess is correct', function() {
    const feedback = takeTurn('object', round)
    expect(feedback).to.equal('Correct!')
  })
  
  it('should return feedback if the guess is incorrect', function() {
    const badFeedback =  takeTurn('mutator', round)
    expect(badFeedback).to.equal('Incorrect!')
  })
})