const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game;
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start with a null current round', () => {
    expect(game.currentRound).to.equal(null);
  });

  it('should be able to start the game', () => {
    expect(game.start).to.be.a('function');
  });

  it('should start with a new current round and a new deck of cards', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceOf(Round)
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions);
  });
});