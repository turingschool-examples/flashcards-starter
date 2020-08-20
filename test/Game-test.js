let chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {
  let game;
  beforeEach((done) => {
    game = new Game();
    done();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the round', function() {
    expect(game.currentRound).to.equal(undefined);
  }); 
});