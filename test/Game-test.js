const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Game', function () {
  
  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should start a new game', function () {
    const game = new Game();
    game.start()
    let round = game.currentRound;
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.eql([]);
  })
});