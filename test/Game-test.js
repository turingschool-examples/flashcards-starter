const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let game, card, deck;

  beforeEach(() => {
    game = new Game();
    card = new Card();
    deck = new Deck();
  });

  it('should be function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have create deck method', function() {
    game.createDeck();
    expect(game.currentDeck).to.be.an.instanceof(Deck);
    expect(game.currentRound).to.be.an.instanceof(Round);
 });

  it('should have a start method', function() {
   expect(game.start).to.be.a('function');
 });
});
