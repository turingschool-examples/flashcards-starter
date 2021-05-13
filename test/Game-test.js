const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const data = require('../src/data');


describe('Game', function () {
  let card1, card2, card3, deck, round, game
  beforeEach(() => {

    card1 = new Card(2, '?', [], '!')
    card2 = new Card(2, '?', [], '!')
    card3 = new Card(3, '?', [], '!')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck);
    game = new Game(round)
  })

  describe('Game Properties', function () {
    it('should be a function', function() {
      expect(Game).to.be.a('function');
    })
  
    it('should keep track of the current round', function () {
      expect(game.currentRound).to.deep.equal(round)
    })

    it('should have a start function', function () {
      expect(game.start).to.be.a('function');
    })
    it('should be able to create cards', function () {
      game.start()
      expect(game.cards).to.have.lengthOf(30)
    })
  })
})