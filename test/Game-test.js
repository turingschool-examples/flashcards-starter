const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the current round', function() {
    const game = new Game();
  
    expect(game.currentRound).to.equal(0);
  });

  it('should create new deck of cards', function() {
    const game = new Game();
    const deck = game.createNewDeck();

    expect(deck).to.be.an.instanceof(Deck);
  });
});