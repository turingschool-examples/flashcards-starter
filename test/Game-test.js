const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Game', function() {

  let deck, round, game, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round.currentCard);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should create a deck of cards', function() {
    game.start();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should create cards', function() {
    game.start();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should print a welcome message', function() {
    game.printMessage(deck, round);
    expect(game.printMessage(deck, round)).to.equal(`Welcome to FlashCards! You are playing with 3 cards.
-----------------------------------------------------------------------`);
  });

});
