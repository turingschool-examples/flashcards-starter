const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')
const data = require('../src/data')
const prototypeQuestions = data.prototypeData

describe('Game', () => {

  let game

  beforeEach(() => {
    game = new Game()

    prototypeQuestions.forEach(flashCard => {
      let card = new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer)
      game.cards.push(card)
    })
    game.deck = new Deck(game.cards)
    game.round = new Round(game.deck)
  })

  it('should create Cards', () => {
    expect(game.cards[0]).to.be.an.instanceOf(Card)
    expect(game.cards[1]).to.be.an.instanceOf(Card)
    expect(game.cards[2]).to.be.an.instanceOf(Card)
  })

  it('should put Cards in a Deck', () => {
    expect(game.deck).to.be.an.instanceOf(Deck)
    expect(game.deck.cardCollection).to.be.an('array')
  })

  it('should create a new Round using the Deck', () => {
    expect(game.round).to.be.an.instanceOf(Round)
  })

  it('should keep track of the currentRound', () => {
    game.currentRound = game.round
    expect(game.currentRound).to.be.an('object')
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})