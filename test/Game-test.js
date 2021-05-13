const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });

  it('should keep track of currentRound', function() {

    const deck = new Deck(["card1", "card2", "card3"])
    const round = new Round(deck);
    const game = new Game(round);

    expect(game.currentRound).to.equal(round);
  });

  it('should create Cards, put them in a deck, & create new round', function() {

    const game = new Game("x");

    game.start();

    expect(game.currentRound.deck.cards).to.equal(prototypeQuestions);
  });
});
