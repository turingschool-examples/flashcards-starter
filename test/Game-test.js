const chai = require('chai');
const expect = chai.expect
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', () => {

  it('should put cards in a deck', () => {
    let game = new Game();
    game.start();
    expect(game.deck.length).to.deep.equal(30);
  });

  it('should ', () => {

  });

  it.skip('should ', () => {

  });
});
