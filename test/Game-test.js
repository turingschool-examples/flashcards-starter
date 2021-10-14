const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', function(){
  it('should be a function', function(){
    expect(Game).to.be.a('function')
  })

  it('should be a new instance of the game class', function() {
    const game = new Game()
    expect(game).to.be.an.instanceof(Game);
  })
})