const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Game = require('../src/Game');

describe('start game', function() {
  let card1, card2, card3, deck, game;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    card3 = new Card(3, 'Which of these is NOT a reserved word in Javascript?', ['if', 'same', 'false'], 'same');

    deck = new Deck([card1, card2, card3]);

    game = new Game();
    game.start();
  });

  it('should keep track of a round', function() {
    expect(game.currentRound).to.equal(game.currentRound);
  });

  it('should print a welcome message', function() {
    expect(game.start()).to.equal(console.log('Welcome to FlashCards! You are playing with 30 cards.'));
  });

  it('should print a question to allow interation with the CLI', function() {
    expect(game.start()).to.equal(console.log(deck.cardsInDeck[0].question));
  });
});
