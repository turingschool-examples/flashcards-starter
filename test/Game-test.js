const chai = require('chai');
const expect = chai.expect;

var Game = require('../src/Game');
var Deck = require('../src/Deck');

describe('Game', function() {
  var game;

  beforeEach( () => {
    game = new Game();
  });

  // it('should have the currentRound method', function() {
  //   expect(game.returnCurrentRound).to.be.a('function');
  // });
  //
  // it('game.currentRound() should keep track of the current round', function() {
  //   expect(game.returnCurrentRound()).to.equal(0);
  // });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(0);
  });

  it('should have the startGame method', function() {
    expect(game.startGame).to.be.a('function');
  });

  it('game.startGame() should create cards', function() {

  });

  it('game.startGame() should put cards into the deck', function() {

  });

  it('game.startGame() should create a new Round using the deck', function() {

  });

  it('game.startGame() should invoke game.printMessage', function() {

  });

  it('game.startGame() should invoke game.printQuestion', function() {

  });






})
