'use strict'

const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Game = require('../src/Game')

describe('Game', function () {

  it('should be a function', function () {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function () {
    const card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    const round = new Round(card)
    const game = new Game(round)
    expect(game).to.be.an.instanceof(Game)
  })

  it('should keep track of the current round', function () {
    const card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    const round = new Round(card)
    const game = new Game(round)
    expect(game.currentRound).to.deep.equal(round)
  })

  it('should create cards', function () {
    const card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    const turn = new Turn('yes', card)
    const round = new Round(card)
    const game = new Game(round)
    game.start(card.id, card.question, card.answers, card.correctAnswer, turn.guess, turn.card, turn)
    expect(card.id).to.equal(1)
    expect(card.question).to.equal('Have a question')
    expect(card.answers).to.deep.equal(['nope', 'yes', 'not this'])
    expect(card.correctAnswer).to.equal('yes')
  })

  it('should put cards in a deck', function () {
    const card = new Card(1, 'Have a question', ['nope', 'yes', 'not this'], 'yes')
    const card1 = new Card(2, 'Another question', ['ok', 'maybe', 'no'], 'maybe')
    const turn = new Turn('yes', card)
    const deck = new Deck()
    const round = new Round(card)
    const game = new Game(round)
    game.start(card.id, card.question, card.answers, card.correctAnswer, turn.guess, turn.card, turn)
    game.start(card1.id, card1.question, card1.answers, card1.correctAnswer, turn.guess, turn.card, turn)
    deck.createDeck(card)
    deck.createDeck(card1)
    expect(deck.currentDeck[0]).to.deep.equal(card)
    expect(deck.currentDeck[1]).to.deep.equal(card1)
  })
})