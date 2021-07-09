const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have a way to keep track of the current round', () => {
    game.currentRound;
    expect(game.currentRound).to.equal(null);
  });

  it('should create a new Round using the Deck', () => {
    game.start();
    const currentDeck = game.currentRound.deck;

    expect(currentDeck.cards[0]).to.be.an.instanceof(Card);
    expect(currentDeck).to.be.an.instanceof(Deck);
    expect(currentDeck.cards.length).to.equal(prototypeQuestions.length);
  });
});
