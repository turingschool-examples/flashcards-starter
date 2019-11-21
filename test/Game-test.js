const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Game', function() {
  let game;

  beforeEach( () => {
    game = new Game();
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal('');
  });

  it('should have the startGame method', function() {
    expect(game.startGame).to.be.a('function');
  });

  it('game.startGame() should be able to hold cards', function() {
    expect(game.cards).to.deep.equal([])

  });

  it('game.startGame() should put cards into the deck', function() {
    game.startGame();

    expect(game.cards[0]).to.be.a.instanceof(Card);
    expect(game.cards[0].id).to.equal(prototypeQuestions[0].id);
    expect(game.cards[16].correctAnswer).to.equal(prototypeQuestions[16].correctAnswer);

  });

  it('game.startGame() should create a new Round using the deck', function() {
    game.startGame();
    expect(game.currentRound).to.be.a.instanceof(Round);
  });
});
