const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', function() {
  beforeEach(function() {
    global.game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });
});
