const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round')


describe('Game', function() {

  it('should start a new Round with cards in a deck', function() {
     expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
