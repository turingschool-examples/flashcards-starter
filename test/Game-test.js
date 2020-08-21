const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('', function() {

  it('should instantiate cards', function() {

    var game = new Game();
    game.start();

    var cardsInDeck = game.currentRound.deck.cards;

    expect(cardsInDeck[0]).to.be.an.instanceof(Card);
  });

  it('should create deck of cards', function() {

    var game = new Game();
    game.start();

    var cardsInDeck = game.currentRound.deck.cards;

    expect(cardsInDeck.length).to.equal(30);
  });

  it('should create new Round', function() {

    var game = new Game();
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should print message console', function() {

    var game = new Game();
    game.start();

    expect(game.printMessage(deck, this.currentRound)).to.equal(`Welcome to FlashCards! You are playing with 30 cards.
    -----------------------------------------------------------------------`);
  });
});
