const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  let card1, card2, card3, deck, round;
  
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    card2 = new Card(2,'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');

    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'],'mutator method');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

    game = new Game();

  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.equal(null);
  });

  describe('start()', () => {

    it('should be a function', () => {
      expect(game.start).to.be.a('function');
    });

    it('should create an instance of the Card class', () => {
      // game.start();
      expect(game.currentRound.currentCard).to.be.an.instanceOf(Card);
    });

    it('should create an instance of the Deck class', () => {
      // game.start();
      expect(game.currentRound.deck).to.be.an.instanceOf(Deck);
    });

    it('should create a new round that is an instance of the Round class', () => {
      expect(game.currentRound).to.equal(null);
      // game.start();
      console.log(game.currentRound);
      expect(game.currentRound).to.be.an('object');
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });

  });

});
