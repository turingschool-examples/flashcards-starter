const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
    game.start(prototypeQuestions);
  });

  it('should keep track of the current round', () => {
    expect(game).to.have.property('currentRound');
  });
  
  it('should create cards when you start the game and put those cards in a deck', () => {
    expect(game.currentDeck.cards[0]).to.be.an.instanceOf(Card);
    expect(game.currentDeck.cards[0]).to.deep.equal(prototypeQuestions[0]);
  });
  
  it('should create a new Round', () => {
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
    
  it('should use the created Deck for the new Round', () => {
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions);
  });
});