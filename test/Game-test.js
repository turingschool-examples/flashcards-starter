const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', function() {

  it('should create cards', function() {
    const game = new Game();
    expect(game.start()).to.equal(30)
  })
})
