const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Game', function () {
  let card1, card2, card3, deck, round, game
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    deck = new Deck([card1, card2, card3]);
    
    round = new Round(deck);

    game = new Game(round)
  })

  describe('Game Properties', function () {
    it('should be a function', function() {
      expect(Game).to.be.a('function');
    })
  
    it('should keep track of the current round', function () {
      game.sayRound()
      expect(game.currentRound).to.deep.equal(round)
    })


  })
})