const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card')
const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    game.start()
    expect(Game).to.be.a('function');
  });

});
