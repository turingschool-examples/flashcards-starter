const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.eql(1);
  })

  it('should have a method of game that creates cards', function() {
    const game = new Game();
    game.start();
    expect(game.cards).to.eql(prototypeQuestions);
  })
});