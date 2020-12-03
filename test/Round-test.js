'use strict'

const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Round = require('../src/Round')

describe('Round', function () {
  let round, card

  beforeEach(function () {
    card = new Card(1, 'What is my name', ['Elsa', 'Matt', 'Gonzo'], 'Elsa')
    round = new Round(card)
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function () {
    const round = new Round
    expect(round).to.be.an.instanceof(Round)
  })

  it('should return the current card', function () {
    round.returnCurrentCard()
    expect(round.card).to.deep.equal(card)
  })

  describe('Round.takeTurn', function () {

    it('should instantiate an instance of Turn', function () {
      const turn = new Turn('Elsa', new Card())
      expect(turn).to.be.an.instanceof(Turn);
    });

    it('should add one to the turn count', function () {
      const turn = new Turn('Elsa', card)
      expect(round.turns).to.equal(0)
      round.takeTurn(turn.guess, card)
      expect(round.turns).to.equal(1)
    })

    it('should change the current card to be the next card', function () {
      const turn = new Turn('Elsa', card)
      expect(round.card.cardId).to.equal(1)
      round.takeTurn(turn.guess, card)
      expect(round.card.cardId).to.equal(2)
    })

    it('should store id of incorrect guesses', function () {
      round.takeTurn('Matt', card)
      expect(round.incorrectGuesses).to.include(card.cardId)
    })

    it('should evaluate the current guess', function () {
      const turn = new Turn('Elsa', card)
      expect(turn.evaluateGuess()).to.equal(true)
      const turn1 = new Turn('Matt', card)
      expect(turn1.evaluateGuess()).to.equal(false)
    })

    it('should give feedback', function () {
      expect(round.takeTurn('Elsa', card)).to.equal('correct!')
      expect(round.takeTurn('Matt', card)).to.equal('incorrect!')
    })
  })

  it('should calculate percent correct', function () {
    round.takeTurn('Elsa', card)
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('Matt', card)
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

  it('should log a game over message', function () {
    round.takeTurn('Elsa', card)
    round.takeTurn('Matt', card)
    expect(round.endRound()).to.be.a('string')
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  })

})