const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be able to store the current round', function() {
    const nothing = {};
    const game = new Game(nothing);
    expect(game).to.have.property('currentRound');
  });

  it('should be able to create 30 cards', function() {
    const nothing = {};
    const game = new Game(nothing);
    const cards = game.createCards();
    expect(cards).to.be.an('array').with.a.lengthOf(30);
  });

  it('should be able to create a deck', function() {
    const nothing = {};
    const game = new Game(nothing);
    const cards = game.createCards();
    const deck = game.createDeck(cards);
    expect(deck).to.be.an.instanceof(Deck);
    expect(deck.cards).to.equal(cards);
  });

  it('should be able to start a new round', function() {
    const nothing = {};
    const game = new Game(nothing);
    const cards = game.createCards();
    const deck = game.createDeck(cards);
    const round = game.createRound(deck);
    expect(round).to.be.an.instanceof(Round);
    expect(round.deck).to.equal(deck);
  });

});
