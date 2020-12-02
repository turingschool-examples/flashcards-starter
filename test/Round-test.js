const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Round', function () {
  let card, turn, round

  beforeEach(function () {
    card = new Card(1, 'This is the question?', ['object', 'array', 'function'], 'object')
    turn = new Turn('object', card)
    round = new Round(card, turn, turn.guess)
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should return the current card', function () {
    const round = new Round(card)
    round.returnCurrentCard()
    expect(round.currentCard).to.deep.equal(card)
  })

  it('should instantiate a Turn', function () {
    round.takeTurn(turn.guess, card)
    expect(round.currentTurn).to.deep.equal(turn)
  })

  it('should add one to the turn count', function () {
    round.takeTurn(turn.guess, card)
    round.takeTurn(turn.guess, card)
    round.takeTurn(turn.guess, card)
    expect(round.turnCount).to.equal(3)
  })

  it.skip('should change the current card to be the next card', function () {

  })

  it('should evaluate the current guess', function () {
    let isRight = turn.evaluateGuess(turn.guess)
    expect(isRight).to.equal(true)
    const thisGuess = 'array'
    isRight = turn.evaluateGuess(thisGuess)
    expect(isRight).to.equal(false)
  })

})