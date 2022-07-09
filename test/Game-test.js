const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');


describe('Game', function() {

  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });

  it('should be a new instance of Game', function() {

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', function() {

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should be able to create Cards', function() {

    const cards = game.createCards(data.games.prototype);
    expect(cards[0]).to.be.an.instanceOf(Card);
    expect(cards.length).to.equal(30);
  });

  it('should be able to put Cards in a Deck', function() {

    const cards = game.createCards(data.games.prototype);
    const deck = game.createDeck(cards);
    expect(deck).to.be.an.instanceOf(Deck);
    expect(deck.cards).to.deep.equal(data.games.prototype);
  });

  it('should be able to start a new Round using the Deck', function() {

    const cards = game.createCards(data.games.prototype);
    const deck = game.createDeck(cards);
    const round = game.createRound(deck);
    expect(round).to.be.an.instanceOf(Round);
    expect(round.deck).to.equal(deck);
    expect(round.turnCount).to.equal(0);
  });

});