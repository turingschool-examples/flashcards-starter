const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  it('Should keep track of the currentRound', function() {

    let game = new Game();
    game.start();

    game.currentRound.takeTurn('sea otter', 1);
    game.currentRound.endRound(game);

    expect(game.currentRound.turns).to.equal(0);
  });
});