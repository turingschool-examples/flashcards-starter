const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  }); 

  it('should be an instance of a Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 
});