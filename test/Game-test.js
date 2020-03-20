const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')

describe('Game', function() {

  let card1;
  let card6;
  let card13;
  let deck;
  let round;
  let game;
  let game2;
  let game32;

  beforeEach(function() {

    card1 = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }
    card6 = {
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    }
    card13 = {
      "id": 13,
      "question": "The callback function for map() returns a modified version of the current element.",
      "answers": ["true", "false"],
      "correctAnswer": "true"
    }
    deck = {
      cards: [card1, card6, card13]
    }
    round = {
      deck: deck.cards
    }
    game = new Game()
    game2 = new Game(2)
    game32 = new Game(32)
  })

  it('should be a function', function() {

    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function() {

    expect(game).to.be.an.instanceof(Game)
  })

  it('should keep track of current round', function() {

    expect(game.currentRound).to.equal(1)
    expect(game2.currentRound).to.equal(2)
    expect(game32.currentRound).to.equal(32)
  })

  // last three pass but it starts the game in the test suite...weird...
  // leaving skipped for testing ease
  it.skip('should create cards', function() {
    game.start()

    expect(deck.cards).to.deep.equal([card1, card6, card13])
  })

  it.skip('should put cards in the deck', function() {

    game.start()

    expect(deck.cards).to.deep.equal([card1, card6, card13])
  })

  it.skip('should create a new round using the deck', function() {

    game.start()

    expect(round.deck.cards.length).to.equal(3)
  })

})
