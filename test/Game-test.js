const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe ('Game', function() {

  it('should store the current round', function() {
    let game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
  
});
