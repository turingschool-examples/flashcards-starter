const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe("Game", () => {
  let data
  let card1
  let card2
  let card3
  let deck
  let round

  beforeEach(() => {
    data = [{ "id": 1, "question": 'What is Robbie\'s favorite animal', "answers": ['sea otter', 'pug', 'capybara'], "correctAnswer": 'sea otter' },
    { "id": 14, "question": 'What organ is Khalid missing?', "answers": ['spleen', 'appendix', 'gallbladder'], "correctAnswer": 'gallbladder' },
    { "id": 12, "question": "What is Travis\'s favorite stress reliever?", "answers": ['listening to music', 'watching Netflix', 'playing with bubble wrap'], "correctAnswer": 'playing with bubble wrap' }]
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(data)
  })

  it("should be a function", () => {
    expect(Game).to.be.a('function')
  })
  it("should keep track of the current round", () => {
    game.createRound()
    expect(game.currentRound).to.deep.equal(round)
  })
  it("should create new instances of Card", () => {
    const createdCards = game.createCard()
    expect(createdCards).to.deep.equal([card1, card2, card3])
  })
  it("should create a new instance of Deck with the Cards", () => {
    const createdDeck = game.makeDeck()
    expect(createdDeck).to.deep.equal(deck)
  })
  it("should create a new instance of Round with the Deck", () => {
    const createdRound = game.createRound()
    expect(createdRound).to.deep.equal(round)
  })
})