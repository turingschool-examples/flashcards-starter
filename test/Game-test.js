const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', () => {
  it ('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it ('should start a new game with a new round using a new deck of cards', () => {
    // let game = new Game();
    // game.startRefactor();
    // expect(new Card()).to.be.an.instanceOf(Card);
  });

  // it ('should keep track of the current round', () => {
  //
  // });
});
