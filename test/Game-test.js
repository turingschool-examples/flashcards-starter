const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to create a round', function() {
    game.createRound()
    expect(game.currentRound.deck.cards.length).to.be.equal(30)
  })

});
