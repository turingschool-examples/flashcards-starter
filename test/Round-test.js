const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', function () {
  let card, card1, turn, turn1, round, round1

  beforeEach(function () {
    card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    card1 = new Card(2, 'This is the question?', ['object', 'array', 'function'], 'object')
    turn = new Turn('yes', card)
    turn1 = new Turn('object', card1)
    round = new Round(card, turn, turn.guess)
    round1 = new Round(card1, turn1, turn1.guess)
  })

  it.skip('should be a function', function () {
    expect(Round).to.be.a('function')
  })

  it.skip('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round)
  })

  it.skip('should return the current card', function () {
    const round = new Round(card1)
    round.returnCurrentCard()
    expect(round.currentCard).to.deep.equal(card1)
  })

  it.skip('should instantiate a Turn', function () {
    round.takeTurn(turn.guess, card1)
    expect(round.currentTurn).to.deep.equal(turn)
  })

  it.skip('should add one to the turn count', function () {
    round.takeTurn(turn.guess, card1)
    round.takeTurn(turn.guess, card1)
    round.takeTurn(turn.guess, card1)
    expect(round.turnCount).to.equal(3)
  })

  it.skip('should change the current card to be the next card', function () {
    expect(round1.currentCard.cardId).to.equal(2)
    round1.takeTurn(turn1.guess, card1)
    expect(round1.currentCard.cardId).to.equal(3)
  })

  it.skip('should evaluate the current guess', function () {
    expect(turn.evaluateGuess(turn.guess)).to.equal(true)
    expect(turn.evaluateGuess('array')).to.equal(false)
  })

  it.skip('should give feedback', function () {
    turn.evaluateGuess('no')
    expect(turn.giveFeedback()).to.equal('incorrect!')
    turn.evaluateGuess('yes')
    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it.skip('should calculate percent correct', function () {
    round.takeTurn('yes', turn.currentCard) // right
    round.takeTurn('yes', turn.currentCard) // right
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('wrong answer', turn.currentCard) // wrong
    round.takeTurn('wrong answer', turn.currentCard) // wrong
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

  it.skip('should log a game over message', function () {
    round.takeTurn('yes', turn.currentCard) // right
    round.takeTurn('yes', turn.currentCard) // right
    round.takeTurn('wrong answer', turn.currentCard) // wrong
    round.takeTurn('wrong answer', turn.currentCard) // wrong
    expect(round.endRound()).to.be.a('string')
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  })

})