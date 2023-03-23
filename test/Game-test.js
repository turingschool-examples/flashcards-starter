const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should be able to create cards', function() {
    const game = new Game();

    game.createCards();
 
    expect(game.cards).to.deep.equal(prototypeQuestions);
  });

  it('should be able to create a deck of cards', function() {
    const game = new Game();

    game.createCards();
 
    expect(game.deck.cards).to.deep.equal(game.cards);
  });

  it('should be able to create a round using the deck', function() {
    const game = new Game();

    game.createCards();
 
    expect(game.currentRound.deck).to.deep.equal(game.deck.cards);
  });
});