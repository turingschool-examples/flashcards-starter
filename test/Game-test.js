const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a start method', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it('should have a start method that creates cards', function() {
    const game = new Game();

    game.start();

    expect(game.cardsArray.length).to.equal(30);
  });

  it.skip('should put cards in deck', function() {
    const game = new Game();

    game.start();

    //deck not defined
    // expect(deck.cards.length).to.equal(30);
    // expect(deck.round).to.be.an.instanceof(Deck)
  })

  it.skip('should create a new round', function() {
    const game = new Game();

    game.start();

    // a way to test that values are coming through
    // expect(game.start()).to.equal(30);
  })

  it.skip('should display the message in the CLI', function() {
    const game = new Game();
  })

});
