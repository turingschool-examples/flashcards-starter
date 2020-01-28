const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should be able to log the current round being played', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(null);
  });

  it.skip('should be able to start a game with a deck of cards', function() {
    const game = new Game();

    game.start();

    expect(game.currentDeck).to.be.an.instanceof(Deck);
  });

  it.skip('should be able to create a new round', function() {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
  it('testing grounds', function() {
    const game = new Game();

    game.start();

    console.log(game.currentRound.deck);

    // expect(game.currentRound).to.be.an.instanceof(Round);
  });
});

module.exports = Game;
