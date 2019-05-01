const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Game = require('../src/Game')

describe('Game', function() {

  it('should have a start function', function() {
    const game = new Game()
    expect(game.start).to.be.a('function')
  })
})