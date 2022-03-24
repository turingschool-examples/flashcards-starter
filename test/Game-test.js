const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

let game = new Game();
game.start();

describe('Game', function() {

  it('should be an instance of Round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

})
