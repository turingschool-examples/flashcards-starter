const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const game = new Deck();
    expect(game).to.be.an.instanceOf(Deck);
  });
  
  it('should be an instance of Round', function() {
    const game = new Round();
    expect(game).to.be.an.instanceOf(Round);
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the current round', function() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    const game = new Game();
    expect(game.currentRound).to.eql({});
    game.start();
    expect(game.currentRound).to.eql(round);
  });
});