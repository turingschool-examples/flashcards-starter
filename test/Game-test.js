const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });

// Should keep track of the currentRound

    it('should keep track of currentRound', function() {


    expect(game.currentRound).to.equal(round);
  });

})