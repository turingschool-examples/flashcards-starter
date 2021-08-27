const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, cards, deck, round, game;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'what array method executes a provided function once for each array element?', ['map', 'forEach', 'filter'], 'forEach');
    card3 = new Card(3, 'what array method creates a new array with all elements that pass the test implemented by the provided function?', ['for loop', 'filter', 'if statement'], 'filter');

    cards = [card1, card2, card3];
    
    deck = new Deck(cards);

    round = new Round(deck);

    game = new Game(round);
  });

  it('game should begin with all necessary prompts and data', function() {

  game.start();
  expect(game.currentRound.turns).to.equal(0);
  expect(game.currentRound.deck.cards).to.be.an('array');
  expect(game.printMessage).to.be.a('function');
  expect(game.printQuestion).to.be.a('function');
});

})
