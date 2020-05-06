const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Card = require('../src/Card')
const Game = require('../src/Game')
const {prototypeData} = require('../src/data.js');

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
    expect(game.currentRound).to.equal(0)
  })

  it('should start the game', () => {
    game.start()
    expect(game.round).to.be.an.instanceOf(Round);
    expect(game.round.deck[0]).to.be.an.instanceOf(Card);
    expect(game.round.deck[0].id).to.equal(prototypeData[0].id)
  })

})