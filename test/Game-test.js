const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game Tests', () => {
  let card1
  let card2
  let card3
  let deck
  let round
  let game

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    )
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    )
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    )

    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
    game = new Game()
  })

  it('should instantiate as the Game class', () => {
    expect(game).to.be.an.instanceof(Game);
  })
})
