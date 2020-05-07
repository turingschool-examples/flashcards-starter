const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Card = require('../src/Card')
const Game = require('../src/Game')

describe('Game', () => {

  let game;

  beforeEach(() => {
    
    game = new Game()

  })

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  }) 

  it('should be an instance of Deck', () => {
    expect(game).to.be.an.instanceOf(Game)
  }) 

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.equal(undefined)
  })

  it('should start the game with a new round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

  it('should start the game with a new set of cards', () => {
    game.start()
    expect(game.currentRound.deck[0]).to.be.an.instanceOf(Card);
  })

})