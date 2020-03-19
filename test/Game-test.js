const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game()

    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function() {
    const game = new Game()

    expect(game).to.be.an.instanceof(Game)
  })

  it('should keep track of current round', function() {
    const game = new Game()
    const game2 = new Game(2)
    const game32 = new Game(32)

    expect(game.currentRound).to.equal(1)
    expect(game2.currentRound).to.equal(2)
    expect(game32.currentRound).to.equal(32)
  })

  it.skip('should create cards', function() {
    const game = new Game()
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6,
      'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13,
      'The callback function for map() returns a modified version of the current element.',
      ['true', 'false'], 'true' )
    const deck = new Deck([card1, card6, card13])
    const round = new Round(deck)
    game.start()

    expect(deck.cards).to.deep.equal([card1, card6, card13])
  })

  it.skip('should put cards in the deck', function() {
    const game = new Game()
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13,
      'The callback function for map() returns a modified version of the current element.',
      ['true', 'false'], 'true' )
    const deck = new Deck([card1, card6, card13])
    // const round = new Round(deck)

    game.start()

    expect(deck.cards).to.deep.equal([card1, card6, card13])
  })

  it.skip('should create a new round using the deck', function() {
    const game = new Game()
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6,
      'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13,
      'The callback function for map() returns a modified version of the current element.',
      ['true', 'false'], 'true' )
    const deck = new Deck([card1, card6, card13])
    const round = new Round(deck)

    game.start()

    expect(round).to.be.instanceof(Round)
  })

})
