const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', () => {
  let cards;
  let deck;
  let round;
  let game;

  beforeEach(() => {
    cards = 
    [
      new Card(flashcards.prototypeData[0]),
      new Card(flashcards.prototypeData[1]),
      new Card(flashcards.prototypeData[2]),
    ];
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game(round);
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });
  
  it('should start the game with a new deck', () => {
    expect(deck.cards).to.have.lengthOf(3);
  });

  it('should keep track of current round', () => {
    expect(game.currentRound).to.equal(round);
  });

  it('should have a start method', () => {
    expect(game.start).to.be.a('function');
  });
})