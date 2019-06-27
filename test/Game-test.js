const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');


describe('Game', function(){
  it('should be a function', function(){
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of current game', function(){
    const game = new Game();

    game.currentRound();
  })

});