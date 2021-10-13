const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {
  const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
  const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
  const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck);
  const game = new Game();
  game.start();
        

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function () {
    expect(game.currentRound()).to.equal(round)
  });

  it('should create cards', function() {
    expect(game.deck.cards[0]).to.equal(card1);
    expect(game.deck.cards[1]).to.equal(card2);
    expect(game.deck.cards[2]).to.equal(card3);
  });

  it('should put cards in a Deck', function () {
    expect(game.deck).to.equal(deck);
  });

  it('should create a new round using the deck', function () {
    expect(game.round).to.equal(round);
  });

});