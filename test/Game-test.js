const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Game = require('../src/Game')
const Round = require('../src/Round')

describe('Game', () => {
  let cards
  let game

  beforeEach(() => {
    const card1 = new Card(
      1,
      'What color is grass?',
      ['blue', 'green', 'red'],
      'green'
    )

    const card2 = new Card(
      2,
      'What color is the sun?',
      ['yellow', 'white', 'pink'],
      'yellow'
    )

    const card3 = new Card(
      3,
      'What color is the ocean?',
      ['blue', 'purple', 'black'],
      'blue'
    )

    cards = [card1, card2, card3]
    game = new Game()
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })

  it('should be an insance of Game', () => {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should have a method that creates the cards', () => {
    expect(game.createCards(cards)).to.deep.equal([
      {
        id: 1,
        question: 'What color is grass?',
        answers: ['blue', 'green', 'red'],
        correctAnswer: 'green',
      },
      {
        id: 2,
        question: 'What color is the sun?',
        answers: ['yellow', 'white', 'pink'],
        correctAnswer: 'yellow',
      },
      {
        id: 3,
        question: 'What color is the ocean?',
        answers: ['blue', 'purple', 'black'],
        correctAnswer: 'blue',
      },
    ])
  })

  it('should keep track of the current round', () => {
    game.createRound()

    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})
