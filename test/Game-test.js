const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {

    expect(game).to.be.an.instanceof(Game);
  });

  // it('should keep track of the current round', function() {
    // WASN'T SURE HOW TO WRITE A TEST FOR THIS
  // });

  // it('should start the game', function() {
  //   // WASN'T SURE HOW TO WRITE A TEST FOR THIS
  //
  //   game.start();
  //
  //   expect(game.currentRound).to.equal(round);
  // });
});
