const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {
  let card, turn

  beforeEach(function() {
    card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    turn = new Turn('current element', card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should be able to store a user\'s guess', function() {  
    expect(turn.guess).to.equal('current element')
  })
 
  it('should be able to store current card in deck', function() {
    expect(turn.card).to.equal(card)
  })
  
  describe('returnGuess()', function() {
    it('should return the user\'s guess', function() {
      const returnedGuess = turn.returnGuess() 

      expect(returnedGuess).to.equal('current element')
    })
  })

  describe('returnCard()', function() {
    it('should return the user\'s card', function() {
      const returnedCard = turn.returnCard() 

      expect(returnedCard).to.equal(card)
    })
  })

  describe('evaluateGuess()', function() {
    it('should be able to evaluate if an answer is correct', function() {
      const turn = new Turn('callback function', card)
      const evaluatedGuess = turn.evaluateGuess()
      
      expect(evaluatedGuess).to.equal(true)
    })

    it('should be able to evaluate if an answer is incorrect', function() {
      const turn = new Turn('an array', card)
      const evaluatedGuess = turn.evaluateGuess()

      expect(evaluatedGuess).to.equal(false)
    })
  })

  describe('giveFeedback()', function() {
    it('should display \'Nailed it!\' if the answer is correct', function() {
      const turn = new Turn('callback function', card)
      const goodFeedback = turn.giveFeedback()

      expect(goodFeedback).to.equal('Nailed it!')
    })

    it('should display \'Nope! Sorry, try again.\' if the answer is incorrect', function() {
      const turn = new Turn('an array', card)
      const badFeedback = turn.giveFeedback()

      expect(badFeedback).to.equal('Nope! Sorry, try again.')
    })
  })
})
