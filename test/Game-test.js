const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Card = require('../src/Card');
const { prototype } = require('../src/data');

describe ('Game', function() {
  let game

  beforeEach('assign values to global variables', function () {
    game = new Game()
  })

  it('should be a function', function() {

    expect(Game).to.be.a('function')
  })

  it('should be an instance of a Game', function() {

    expect(game).to.be.an.instanceof(Game)
  })
  
  it('should be able to keep track of the current round', function() {
    
    expect(game.currentRound).to.be.equal()
  })

  it('should have a way to start the game that creates new Cards', function() {
    const startGame = game.start()
    
    expect(game.currentRound.deck[0]).to.be.an.instanceof(Card)
  })
})