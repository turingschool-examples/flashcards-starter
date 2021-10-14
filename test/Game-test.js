const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('printMessage should be a method on Game', function() {
    const game = new Game();
    expect(game.printMessage).to.be.a('function');
  });

  it('printQuestion should be a method on Game', function() {
    const game = new Game();
    expect(game.printQuestion).to.be.a('function');
  });

  it('should keep track of the currentRound, which is empty initially', function() {
    const game = new Game();
    expect(game.currentRound).to.deep.equal(undefined);
  });

  it('start should be a method on Game', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });
});
