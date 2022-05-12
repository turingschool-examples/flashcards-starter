const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3;
  let deck, deck2;
  let turn1, turn2, turn3;
  let round;
  let game, game2
  beforeEach(() => {
    game2 = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should instantiate a new Game', function() {
    expect(game2).to.be.an.instanceof(Game)
  });

});
