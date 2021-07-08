const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe(Game, () => {
  //-----------test set-up
  let game;

  before(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  //-----------default property tests
  it('should default current round to null', () => {
    expect(game.currentRound).to.equal(null);
  });

  //-----------start method tests
  it('should set current round to an instance of Round that holds prototype data as its deck of cards', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round)
  });

})