const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

beforeEach(() => {
  game = new Game();
})

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should update the current round', function() {
    expect(game.currentRound).to.equal(0);
    game.start();
    expect(game.currentRound).to.equal(1);
  });    
});


