const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  it.skip('should track currentRound', () => {
    game = new Game();

    expect(game.currentRound).to.equal(0);
  })

  it.skip('should have a start() method', () => {
    game = new Game();

    expect(game.start()).to.exist
  })
})