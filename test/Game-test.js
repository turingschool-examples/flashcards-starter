const chai = require('chai');
const expect = chai.expect;
const prototypeQuestions = data.prototypeData;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {
  it.skip('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
    game.start();
  });

  it.skip('should create 30 new Cards', function() {
    const game = new Game();
    expect(game.cards).to.deep.equal([]);
    game.start();
    expect(game.cards.length).to.equal();
  });


});
