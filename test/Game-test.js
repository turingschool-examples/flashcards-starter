const chai = require('chai');
const expect = chai.expect
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', () => {

  it('should put cards in a deck', () => {
    //Setup
    let game = new Game();
    //Execution
    game.start();
    //Assertion
    expect(game.deck.length).to.deep.equal(30);
  });

  it('should start a game with a new round', () => {
    game.start();
    expect(game.currentRound.to.be.an.instanceOf(Round));

  });

  it.skip('should ', () => {

  });
});
