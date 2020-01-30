const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Game = require('../src/Game');

describe('start game', function() {
  let card1, card2, card3, deck, round, game;

  beforeEach(() => {

    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    card3 = new Card(3, 'Which of these is NOT a reserved word in Javascript?', ['if', 'same', 'false'], 'same');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

    game = new Game();
    game.start();
  });

  it.skip('should keep track of a round', function() {
    console.log('test', round);
    expect(game.currentRound).to.equal(game.currentRound) ;
    //what exactly is Round the equivalent of round outside of the variable?
  });

  it.skip('should print a welcome message', function() {
    expect(game.start()).to.equal(console.log('Welcome to FlashCards! You are playing with 30 cards.'));
  });

  it.skip('should print a question to allow interation with the CLI', function() {
    expect(game.start()).to.equal(console.log(deck.cardsInDeck[0].question));
  });
});
