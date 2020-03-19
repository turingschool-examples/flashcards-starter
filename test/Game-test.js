const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  let game, round, deck;

  beforeEach('game instance', function() {
    game = new Game();
    round = new Round(deck);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', function() {
    expect(game.currentRound).to.equal(0);
    game.start();
    expect(game.currentRound.deck.countCards()).to.equal(30);
  });

  it('should start a game', function() {
    game.start();
  });

  it('should put cards in a deck', function() {
    game.start();
    expect(game.currentRound.deck.countCards()).to.equal(30);
  });

  it('should create new Round using Deck', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should display message in the CLI', function() {
    game.printMessage(deck);
  });

  it('should run helper function to interaction via the CLI', function() {
    game.printQuestion(round);
  });

});
