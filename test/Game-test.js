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

  it('should be able to keep track of the current round', function(){
    const game = new Game()
  expect(game).to.have.property('currentRound')
  })

  it('should have a method to start the game', function(){
    const game = new Game()
    game.createCards();
  })
})