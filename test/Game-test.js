const chai = require('chai');
const expect = chai.expect;
const { testData } = require('../src/test-data.js');
const Game = require('../src/Game')

let game;

describe('Game', () => {

  beforeEach(() => {
    game = new Game()
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.instanceof(Game);
  }); 

  it('should keep track of current Round', () => {
    expect(game.currentRound).to.equal(1);
  });

  it('should have a collection of cards', () => {
    expect(game.gameCards).to.deep.equal([])
  });

  // it.skip('should contain a deck', () => {
  //   expect(game.gameDeck).to.deep.equal({})
  // });

  it('shold have start method that creates cards', () => {
    game.start()
    expect(game.gameCards).to.deep.equal(testData);
  });  

  it.skip('should add cards to the deck', () => {
    game.start()
    expect()
  });
});