const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

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
    // expect(turn.returnGuess()).to.equal('current element')
  })
 
  it('should be able to store current card in deck', function() {
    expect(turn.currentCard).to.equal(card)
  })
  

  // describe block for returnGuess() method
  describe('returnGuess()', function() {
    it('should return the user\'s guess', function() {
      const returnedGuess = turn.returnGuess() 

      expect(returnedGuess).to.equal('current element')
    })
  })

  // describe block for returnCard() method
  describe('returnCard()', function() {
    it('should return the user\'s guess', function() {
      const returnedCard = turn.returnCard() 

      expect(returnedCard).to.equal(card)
    })
  })

  // describe block for evaluateGuess() method
  describe('evaluateGuess()', function() {
    it('should display \'Nailed it!\' if the answer is correct', function() {
      const turn = new Turn('callback function', card)
      const expected = turn.evaluateGuess()
      expect(expected).to.equal(true)
    })

    it('should display \'Nope! Try again.\' if the answer is incorrect', function() {
      const turn = new Turn('an array', card)
      const expected = turn.evaluateGuess()
      expect(expected).to.equal(false)
    })
  })
})
