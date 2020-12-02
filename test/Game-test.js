const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Game = require('../src/Game')

describe('Game', function () {
  let game, card, turn, round, deck

  beforeEach(function () {
    card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    turn = new Turn('yes', card)
    game = new Game(round)
    round = new Round(card, turn, turn.guess)
    deck = new Deck()
  })

  it.skip('should be a function', function () {
    expect(Game).to.be.a('function')
  })

  it.skip('should be an instance of Game', function () {
    expect(game).to.be.an.instanceof(Game)
  })

  it.skip('should keep track of the current round', function () {

  })

  it.skip('should know how many turns have happened', function () {
    round.takeTurn(turn.guess, card)
    expect(round.turnCount).to.equal(1)
    round.takeTurn(turn.guess, card)
    expect(round.turnCount).to.equal(2)
  })

  it.skip('should create cards', function () {
    game.startGame(card)
    expect(card.cardId).to.equal(1)
    expect(card.question).to.equal('Have a question')
    expect(card.answers).to.deep.equal(['nope', 'yes', 'not this'])
    expect(card.correctAnswer).to.equal('yes')
  })

  it.skip('should create the deck', function () {
    expect(deck.currentDeck).to.have.length(0)
    game.startGame()
    // deck.createDeck(card.cardId, card.question, card.answers, card.correctAnswer)
    expect(deck.currentDeck).to.have.length(1)
    // deck.createDeck(card.cardId, card.question, card.answers, card.correctAnswer)
    expect(deck.currentDeck).to.have.length(2)
  })

  it.skip('should create the round', function () {
    game.startGame()
  })

  it.skip('should print the game start message', function () {})

  it.skip('should start the game', function () {})
})