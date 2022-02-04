const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', ()=> {

  it('should be a function', ()=> {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', ()=> {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.instanceof(Round);
  });

  it('should keep track of the current round', ()=> {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.instanceof(Round);
  });

  it('should put cards in deck', ()=> {
    const game = new Game();
    game.start();
    expect(game.currentRound.deckDeck).to.be.instanceof(Deck);
  });

  it('should create cards', ()=> {
    const game = new Game();
    game.start();
    expect(game.currentRound.deckDeck.cardDeck.length).to.equal(30);
  });

});
