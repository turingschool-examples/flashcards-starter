const chai = require('chai');
const expect = chai.expect;
const { testData } = require('../src/test-data.js');
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let game;

describe('Game', () => {

  beforeEach(() => {
    game = new Game()
    game.start(testData)
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.instanceof(Game);
  }); 

  it('should keep track of current Round', () => {
    expect(game.currentRound).to.be.instanceof(Round);
  });

  it('should have a collection of cards', () => {
    expect(game.gameCards).to.deep.equal(testData)
  });

  it('should contain a deck', () => {
    expect(game.gameDeck).to.be.instanceof(Deck)
  });

  it('shold have start method that creates cards', () => {
    game.start(testData)
    expect(game.gameCards).to.deep.equal(testData);
  });  

  it('should add cards to the deck', () => {
    const deck = new Deck(testData)
    deck.countCards()
    game.start(testData)
    expect(game.gameDeck).to.deep.equal(deck);
  });
});