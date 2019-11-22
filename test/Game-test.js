const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');


describe('Game', () => {
  it('should be a function', () => {
    expect(Game).to.be.a('function')
  })
  it('should keep track of the current round', () =>{
    const game = new Game();
    expect(game.currentRound).to.equal(null)
  })
  it('should start the game', () => {
    const game = new Game();
    game.start()
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})