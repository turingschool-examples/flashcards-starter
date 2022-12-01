const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Game', function() {
  let game

  beforeEach('assign values to global variables', function () {
    game = new Game()
  })

  it.skip('should be a function', function() {

    expect(Game).to.be.a('function')
  })

  it.skip('should be an instance of a Game', function() {

    expect(game).to.be.an.instanceof(Game)
  })
  
  it.skip('should be able to keep track of the current round', function() {
    //new cards --> new decks & turn --> round = currentRound
    // expect(game.currentRound).to.be.an.instanceof(Round)
  })

  it.skip('should have a way to start the game that creates new Cards', function() {
    //taking in the cards to the the deck
    // const startGame = game.start()
      //hold new card from array of cards
    //expect(game.current)
  })

  it.skip('should put the new cards into a deck', function() {
    
  })

  it.skip('should play the deck into a new round', function() {
    
  })

  it.skip('should print message to display in the CLI-CommandLineInterface', function() {
    
  })

  it.skip('should print questionnaires to display in and interact with the CLI-CommandLineInterface', function() {
    
  })
})