const chai = require('chai')
const expect = chai.expect

const Game = require('../src/game');

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('it should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game)
  });

  it('should have a property that keeps track of current round', function() {
    expect(game.currentRound).to.equal()
  });

  it('should have a method to start the game', function() {
    expect(game.start).to.be.a('function');
  });

})
